// Stand-in for a not-yet-supplied photo. Mirrors the `.ph` block from the
// source design: a warm neutral panel with centered monospace caption text.
export default function Placeholder({ children, className = '' }) {
  return (
    <div
      className={
        'flex items-center justify-center bg-ph-bg px-[22px] text-center ' +
        "font-mono text-[11px] font-medium leading-[1.5] tracking-[0.09em] text-ph-fg " +
        className
      }
    >
      {children}
    </div>
  )
}
