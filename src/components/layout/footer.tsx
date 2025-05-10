export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          לתיאום הדגמה חיה וקבלת דוח לדוגמה – צרו קשר: <a href="mailto:contact@policyinsightspro.example.com" className="font-medium text-primary hover:underline">contact@policyinsightspro.example.com</a>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Policy Insights Pro. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
