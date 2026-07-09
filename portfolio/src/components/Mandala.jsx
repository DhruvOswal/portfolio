import { motion } from "framer-motion";

export default function Mandala() {
    return (
        <motion.div
            animate={{
                scale: [1, 1.03, 1],
                rotate: 360,
            }}
            transition={{
                rotate: {
                    repeat: Infinity,
                    duration: 150,
                    ease: "linear",
                },
                scale: {
                    repeat: Infinity,
                    duration: 8,
                },
            }}
            style={{ position: 'relative', width: '620px', height: '620px' }}
        >
            <svg
                viewBox="0 0 800 800"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            >
                {Array.from({ length: 24 }).map((_, i) => (
                    <g
                        key={i}
                        transform={`rotate(${i * 15} 400 400)`}
                    >
                        <circle
                            cx="400"
                            cy="180"
                            r="160"
                            fill="none"
                            stroke="var(--amber)"
                            strokeWidth="1.4"
                            opacity="0.55"
                        />

                        <circle
                            cx="400"
                            cy="120"
                            r="60"
                            fill="none"
                            stroke="var(--teal)"
                            strokeWidth="1.1"
                            opacity="0.4"
                        />

                        <line
                            x1="400"
                            y1="400"
                            x2="400"
                            y2="120"
                            stroke="var(--teal)"
                            strokeWidth="0.8"
                            opacity="0.35"
                        />
                    </g>
                ))}

                <circle
                    cx="400"
                    cy="400"
                    r="190"
                    fill="none"
                    stroke="var(--amber)"
                    strokeWidth="2.8"
                />

                <circle
                    cx="400"
                    cy="400"
                    r="250"
                    fill="none"
                    stroke="var(--teal)"
                    strokeWidth="1.4"
                    opacity=".4"
                />

                <circle
                    cx="400"
                    cy="400"
                    r="310"
                    fill="none"
                    stroke="var(--amber)"
                    strokeWidth="1.2"
                    opacity=".25"
                />
            </svg>
        </motion.div>
    );
}
