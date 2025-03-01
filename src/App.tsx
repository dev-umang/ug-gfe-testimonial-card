import "./App.scss";
import TestimonialCard from "./components/testimonialCard/testimonial.card";

function App() {
  return (
    <main className="main">
      <TestimonialCard
        username="@sarahdole"
        displayName="Sarah Dole"
        avatar="/profile-thumbnail.png"
      >
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </TestimonialCard>

      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/projects/u/the-ug"
          target="_blank"
        >
          UG
        </a>
        .
      </div>
    </main>
  );
}

export default App;
