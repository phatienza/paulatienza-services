export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="https://paulatienza.dev">paulatienza<span>.</span>dev</a>
      <ul className="nav-links">
        <li><a href="#why">Why this matters</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#packages">Pricing</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Get a quote</a></li>
      </ul>
      <a className="nav-cta" href="#contact">Book a free call</a>
    </nav>
  )
}