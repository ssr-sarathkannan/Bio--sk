const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 8) % 100}%`,
  top: `${(index * 23 + 12) % 100}%`,
  delay: `${-(index * 0.73)}s`,
  duration: `${8 + (index % 6) * 1.4}s`,
}))

export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="ambient-sweep" />
      <div className="ambient-particles">
        {PARTICLES.map((particle) => (
          <i
            key={particle.id}
            className="ambient-particle"
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay, animationDuration: particle.duration }}
          />
        ))}
      </div>
      <div className="ambient-stream ambient-stream-one">01001101 // BUILDING</div>
      <div className="ambient-stream ambient-stream-two">SYSTEM ONLINE // 24:7</div>
    </div>
  )
}
