export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-surface-2 px-4 py-3">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="size-2 rounded-full bg-lavender" style={{ animation: `pulseDot 900ms ease-in-out ${dot * 150}ms infinite` }} />
      ))}
    </div>
  );
}
