import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Play, Pause, X } from 'lucide-react';

const NeuralMesh = ({ weights, bias, speed }) => {
    const meshRef = useRef();

    // Create geometry data
    const { positions, indices } = useMemo(() => {
        const size = 50; // grid size
        const count = size * size;
        const positions = new Float32Array(count * 3);
        const indices = [];

        // Initialize positions
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const index = (i * size + j) * 3;
                // x, z from -5 to 5
                positions[index] = (i / (size - 1)) * 10 - 5;
                positions[index + 1] = 0; // y
                positions[index + 2] = (j / (size - 1)) * 10 - 5;

                // Generate indices for grid
                if (i < size - 1 && j < size - 1) {
                    const a = i * size + j;
                    const b = i * size + (j + 1);
                    const c = (i + 1) * size + j;
                    const d = (i + 1) * size + (j + 1);

                    indices.push(a, b, d);
                    indices.push(a, d, c);
                }
            }
        }

        return { positions, indices };
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Auto rotation - slowed down significantly
        if (speed > 0) {
            meshRef.current.rotation.y += speed * 0.002;
        }

        const posAttribute = meshRef.current.geometry.attributes.position;
        const array = posAttribute.array;

        // Sigmoid activation
        const sigmoid = (t) => 1 / (1 + Math.exp(-t));

        // Update y coordinates based on neural formula
        for (let i = 0; i < array.length; i += 3) {
            const x = array[i];
            const z = array[i + 2];

            // Layer 1: Inputs x, z -> Hidden 1, 2, 3
            // h1 = sigmoid(x*w11 + z*w21)
            // h2 = sigmoid(x*w12 + z*w22)
            // h3 = sigmoid(x*w13 + z*w23)

            const h1 = sigmoid(x * weights.w11 + z * weights.w21);
            const h2 = sigmoid(x * weights.w12 + z * weights.w22);
            const h3 = sigmoid(x * weights.w13 + z * weights.w23);

            // Layer 2: Hidden -> Output y
            // y = h1*v1 + h2*v2 + h3*v3 + bias
            const y_out = (h1 * weights.v1 + h2 * weights.v2 + h3 * weights.v3 + bias);

            // Scale for visibility
            array[i + 1] = y_out * 2;
        }
        posAttribute.needsUpdate = true;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="index"
                    array={new Uint16Array(indices)}
                    count={indices.length}
                    itemSize={1}
                />
            </bufferGeometry>
            {/* Blue wireframe material */}
            <meshBasicMaterial color="#2563eb" wireframe={true} side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
    );
};

const Slider = ({ label, value, onChange, min = -2, max = 2, color = "bg-blue-500" }) => (
    <div className="flex flex-col gap-1 w-full group">
        <div className="flex justify-between items-end px-1">
            <span className="text-[10px] font-mono font-medium text-slate-400 lowercase">{label}</span>
            <span className={`text-[10px] font-mono font-bold w-10 text-right ${value < 0 ? 'text-red-500' : 'text-blue-500'}`}>
                {value.toFixed(2)}
            </span>
        </div>
        <div className="relative h-6 flex items-center w-full">
            <div className="absolute w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-200" style={{ width: '100%' }}></div>
            </div>
            <input
                type="range" min={min} max={max} step="0.01"
                value={value} onChange={(e) => onChange(parseFloat(e.target.value))}
                className={`absolute w-full h-full opacity-0 cursor-pointer z-10`}
            />
            <div
                className={`absolute w-4 h-4 rounded-full shadow-sm border-2 border-white transition-transform duration-75 pointer-events-none ${color}`}
                style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 8px)` }}
            />
        </div>
    </div>
);

const NetworkGraph = ({ weights }) => {
    const getNodeColor = () => "#eff6ff"; // light blue bg
    const getStrokeColor = (w) => w >= 0 ? "#3b82f6" : "#ef4444"; // blue pos, red neg
    const getStrokeWidth = (w) => Math.min(Math.abs(w) * 2 + 0.5, 4);

    return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
            {/* Connections Input -> Hidden */}
            {/* x1 to h1, h2, h3 */}
            <line x1="50" y1="50" x2="100" y2="40" stroke={getStrokeColor(weights.w11)} strokeWidth={getStrokeWidth(weights.w11)} opacity="0.6" />
            <line x1="50" y1="50" x2="100" y2="80" stroke={getStrokeColor(weights.w12)} strokeWidth={getStrokeWidth(weights.w12)} opacity="0.6" />
            <line x1="50" y1="50" x2="100" y2="120" stroke={getStrokeColor(weights.w13)} strokeWidth={getStrokeWidth(weights.w13)} opacity="0.6" />
            {/* x2 to h1, h2, h3 */}
            <line x1="50" y1="110" x2="100" y2="40" stroke={getStrokeColor(weights.w21)} strokeWidth={getStrokeWidth(weights.w21)} opacity="0.6" />
            <line x1="50" y1="110" x2="100" y2="80" stroke={getStrokeColor(weights.w22)} strokeWidth={getStrokeWidth(weights.w22)} opacity="0.6" />
            <line x1="50" y1="110" x2="100" y2="120" stroke={getStrokeColor(weights.w23)} strokeWidth={getStrokeWidth(weights.w23)} opacity="0.6" />

            {/* Connections Hidden -> Output */}
            <line x1="100" y1="40" x2="150" y2="80" stroke={getStrokeColor(weights.v1)} strokeWidth={getStrokeWidth(weights.v1)} opacity="0.6" />
            <line x1="100" y1="80" x2="150" y2="80" stroke={getStrokeColor(weights.v2)} strokeWidth={getStrokeWidth(weights.v2)} opacity="0.6" />
            <line x1="100" y1="120" x2="150" y2="80" stroke={getStrokeColor(weights.v3)} strokeWidth={getStrokeWidth(weights.v3)} opacity="0.6" />

            {/* Nodes */}
            {/* Input Layer */}
            <circle cx="50" cy="50" r="8" fill="white" stroke="#bfdbfe" strokeWidth="2" />
            <text x="50" y="50" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">x1</text>
            <circle cx="50" cy="110" r="8" fill="white" stroke="#bfdbfe" strokeWidth="2" />
            <text x="50" y="110" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">x2</text>

            {/* Hidden Layer */}
            <circle cx="100" cy="40" r="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            <text x="100" y="40" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">h1</text>
            <circle cx="100" cy="80" r="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            <text x="100" y="80" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">h2</text>
            <circle cx="100" cy="120" r="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
            <text x="100" y="120" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">h3</text>

            {/* Output Layer */}
            <circle cx="150" cy="80" r="10" fill="white" stroke="#bfdbfe" strokeWidth="2" />
            <text x="150" y="80" dy=".3em" textAnchor="middle" fontSize="6" fill="#64748b" fontFamily="monospace">Y</text>
        </svg>
    );
};

const NeuralLandscape = ({ onClose }) => {
    const [weights, setWeights] = useState({
        w11: 1.0, w12: 1.0, w13: 1.0,
        w21: -1.0, w22: -1.0, w23: -1.0,
        v1: 1.0, v2: -1.0, v3: 1.0
    });
    const [bias, setBias] = useState(0.0);
    const [auto, setAuto] = useState(true);

    const targetWeights = useRef(weights);
    const animationFrame = useRef();
    const lastUpdate = useRef(0);

    const updateWeight = (key, value) => {
        setWeights(prev => ({ ...prev, [key]: value }));
        // Stop auto when manual interaction happens
        if (auto) setAuto(false);
    };

    // Auto-play logic with smooth interpolation
    useEffect(() => {
        if (!auto) {
            cancelAnimationFrame(animationFrame.current);
            return;
        }

        const animate = (time) => {
            // Every 2 seconds, pick new targets
            if (time - lastUpdate.current > 2000) {
                targetWeights.current = {
                    w11: (Math.random() * 4) - 2, w12: (Math.random() * 4) - 2, w13: (Math.random() * 4) - 2,
                    w21: (Math.random() * 4) - 2, w22: (Math.random() * 4) - 2, w23: (Math.random() * 4) - 2,
                    v1: (Math.random() * 4) - 2, v2: (Math.random() * 4) - 2, v3: (Math.random() * 4) - 2
                };
                lastUpdate.current = time;
            }

            setWeights(prev => {
                const next = { ...prev };
                const lerp = 0.02; // Smoothness factor

                Object.keys(next).forEach(key => {
                    next[key] = next[key] + (targetWeights.current[key] - next[key]) * lerp;
                });
                return next;
            });

            // Randomly drift bias slightly
            setBias(prev => prev + (Math.sin(time * 0.001) * 0.005));

            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame.current);
    }, [auto]);

    return (
        <div className="w-full bg-slate-50 rounded-xl overflow-hidden shadow-inner border border-slate-200">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-white">
                <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Neural Landscape</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setAuto(!auto)}
                        className={`px-4 py-1.5 text-[10px] font-bold tracking-wider rounded-full transition-colors flex items-center gap-2 ${auto ? 'bg-slate-100 text-slate-600' : 'bg-white text-slate-400 border border-slate-100'}`}
                    >
                        {auto ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" />}
                        {auto ? 'AUTO' : 'PLAY'}
                    </button>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="px-4 py-1.5 text-[10px] font-bold tracking-wider bg-slate-100 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
                        >
                            CLOSE
                        </button>
                    )}
                </div>
            </div>

            {/* 3D Canvas */}
            <div className="h-[300px] bg-white relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <span className="font-mono text-5xl font-black text-slate-200 tracking-tighter">NON-LINEAR MAPPING</span>
                </div>
                <Canvas>
                    <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={45} />
                    <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} autoRotate={auto} autoRotateSpeed={1.0} />
                    <NeuralMesh weights={weights} bias={bias} speed={auto ? 1.0 : 0} />
                    <gridHelper args={[20, 20, 0xf1f5f9, 0xf8fafc]} position={[0, -2, 0]} />
                </Canvas>
            </div>

            {/* Controls Section */}
            <div className="p-6 bg-white border-t border-slate-100 grid lg:grid-cols-2 gap-8">

                {/* Visual Graph Area */}
                <div className="bg-slate-50/50 rounded-xl border border-slate-100 p-6 flex items-center justify-center h-full min-h-[200px]">
                    <NetworkGraph weights={weights} />
                </div>

                {/* Sliders Area */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {/* Column 1: Input Weights */}
                    <div className="space-y-5">
                        <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Input Weights</h4>
                        <div className="space-y-2">
                            <Slider label="w11" value={weights.w11} onChange={(v) => updateWeight('w11', v)} min={-3} max={3} color="bg-blue-500" />
                            <Slider label="w12" value={weights.w12} onChange={(v) => updateWeight('w12', v)} min={-3} max={3} color="bg-blue-500" />
                            <Slider label="w13" value={weights.w13} onChange={(v) => updateWeight('w13', v)} min={-3} max={3} color="bg-blue-500" />

                            <div className="h-1"></div> {/* Spacer */}

                            <Slider label="w21" value={weights.w21} onChange={(v) => updateWeight('w21', v)} min={-3} max={3} color="bg-blue-500" />
                            <Slider label="w22" value={weights.w22} onChange={(v) => updateWeight('w22', v)} min={-3} max={3} color="bg-blue-500" />
                            <Slider label="w23" value={weights.w23} onChange={(v) => updateWeight('w23', v)} min={-3} max={3} color="bg-blue-500" />
                        </div>
                    </div>

                    {/* Column 2: Hidden Weights + Bias */}
                    <div className="space-y-5">
                        <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Hidden Weights</h4>
                        <div className="space-y-2">
                            <Slider label="v1" value={weights.v1} onChange={(v) => updateWeight('v1', v)} color="bg-indigo-500" />
                            <Slider label="v2" value={weights.v2} onChange={(v) => updateWeight('v2', v)} color="bg-indigo-500" />
                            <Slider label="v3" value={weights.v3} onChange={(v) => updateWeight('v3', v)} color="bg-indigo-500" />

                            <div className="h-6"></div> {/* Spacer */}

                            <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Bias</h4>
                            <Slider label="output_b" value={bias} onChange={setBias} color="bg-slate-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeuralLandscape;
