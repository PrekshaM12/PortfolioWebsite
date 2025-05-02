const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-coolBlue-500/20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/70">© {currentYear} Preksha Mathur. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
