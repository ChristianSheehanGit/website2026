import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope, faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import about from '/about.jpg'
import './App.css'

const placeholder =
  'https://media.istockphoto.com/id/1980276924/vector/no-photo-thumbnail-graphic-element-no-found-or-available-image-in-the-gallery-or-album-flat.jpg?s=612x612&w=0&k=20&c=ZBE3NqfzIeHGDPkyvulUw14SaWfDj2rZtyiKv3toItk='

function Modal({
  title,
  subtitle,
  date,
  description,
  media,
  onClose,
}: {
  title?: string
  subtitle?: string
  date?: string
  description?: string
  media?: Array<{ type: 'image' | 'video'; src: string }>
  onClose: () => void
}) {
  const [mediaIndex, setMediaIndex] = useState(0)
  const hasMedia = media && media.length > 0

  const goToPrevious = () => {
    if (!hasMedia) return
    setMediaIndex((prev) => (prev === 0 ? media!.length - 1 : prev - 1))
  }

  const goToNext = () => {
    if (!hasMedia) return
    setMediaIndex((prev) => (prev === media!.length - 1 ? 0 : prev + 1))
  }

  const current = hasMedia ? media[mediaIndex] : null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="modal-scroll">
          {title && <h3 className="modal-title">{title}</h3>}
          {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          {date && <p className="modal-date">{date}</p>}
          {hasMedia && (
            <div className="modal-gallery">
              <button
                className="modal-gallery-arrow modal-gallery-arrow-left"
                onClick={goToPrevious}
                aria-label="Previous"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="modal-gallery-item">
                {current?.type === 'video' ? (
                  <iframe
                    src={current.src}
                    allowFullScreen
                    title="Video"
                  ></iframe>
                ) : (
                  <img src={current?.src} alt="" />
                )}
              </div>
              <button
                className="modal-gallery-arrow modal-gallery-arrow-right"
                onClick={goToNext}
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          )}
          {description &&
            description.split('\n').map((paragraph, index) => (
              <p key={index} className="modal-description">{paragraph}</p>
            ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="app">
      <header className="header">
        <h1 className="name">Christian Sheehan</h1>
        <p className="subtitle">Computer Science • Software Development</p>
        <nav className="social-links">
          <a
            href="https://github.com/christiansheehangit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sheehanchristian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          <a href="/resume.pdf">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Resume</span>
          </a>
        </nav>
        <a className="email" href="mailto:christiansheehan@christiansheehan.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>christiansheehan@christiansheehan.com</span>
        </a>
      </header>

      <section className="about">
        <div className="about-container">
            <img className= "about-image" src={about}/>
          <div className="about-text">
            <h2>About</h2>
            <p>
              I'm a computer science student at UT Dallas interested in building software that combines thoughtful interfaces with interesting technical problems.
            </p>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="section-container">
          <h2>Work Experience</h2>
          <div className="cards">
            <button className="card" onClick={() => setOpen('work-1')}>
              <div className="card-image">
                <img src= {placeholder} alt="" />
              </div>
              <div className="card-content">
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('work-2')}>
              <div className="card-image">
                <img src={placeholder} alt="" />
              </div>
              <div className="card-content">
                <h3>Job Title</h3>
                <p>Company Name</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-container2">
          <h2>Projects</h2>
          <div className="cards">
                        <button className="card" onClick={() => setOpen('project-4')}>
              <div className="card-image">
                <img src={placeholder} alt="" />
              </div>
              <div className="card-content">
                <h3>Note to Self</h3>
                <p>App | 2026</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('project-4')}>
              <div className="card-image">
                <img src="/elephant.jpg" alt="" />
              </div>
              <div className="card-content">
                <h3>Speak with an Elephant</h3>
                <p>Website | 2026</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('project-3')}>
              <div className="card-image">
                <img src="/messages.png" alt="" />
              </div>
              <div className="card-content">
                <h3>Public Message Board</h3>
                <p>Website | 2025</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('project-2')}>
              <div className="card-image">
                <img src="/sads.png" alt="" />
              </div>
              <div className="card-content">
                <h3>SADS.club</h3>
                <p>Website | 2025</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('project-1')}>
              <div className="card-image">
                <img src="/bubbo.jpg" alt="" />
              </div>
              <div className="card-content">
                <h3>Bubbo: The Lost Hat</h3>
                <p>Video Game | 2021</p>
              </div>
            </button>

          </div>
        </div>
      </section>

      <section className="fade"></section>

      {open === 'work-1' && (
        <Modal
          title="Job Title"
          subtitle="Company Name"
          date="2020 - Present"
          description="Description of the role and responsibilities."
          media={[{ type: 'image', src: placeholder }]}
          onClose={() => setOpen(null)}
        />
      )}
      {open === 'work-2' && (
        <Modal
          title="Job Title"
          subtitle="Company Name"
          date="2018 - 2020"
          description="Description of the role and responsibilities."
          media={[{ type: 'image', src: placeholder }]}
          onClose={() => setOpen(null)}
        />
      )}
      {open === 'project-1' && (
        <Modal
          title="Bubbo: The Lost Hat"
          subtitle="Video Game"
          date="May 17, 2021"
          description="Bubbo: The Lost Hat is a 2D platformer I developed in 2021 while attending high school virtually as a freshman. Although the game is now over five years old, it remains one of the projects I am most proud of because of the amount of work and personality I put into it. I built the game in Unity, created an original soundtrack, and designed every sprite and piece of artwork pixel by pixel. Development took roughly three months of working on and off while balancing school.
          
The project began as a fan game for Bubbo, an inside-joke character that originated from a Microsoft Paint drawing and had developed an online community that created fan art around it. At the time, I was experimenting with game development and wanted to see how far I could take the character. I envisioned a 10-level 2D platformer with unique gameplay gimmicks and musical numbers throughout, essentially a video-game/musical hybrid.

I quickly learned that even a project I considered reasonably scoped could become much more complicated than expected. The three months of development became an intensive learning experience in Unity and C#. I gradually developed fluency with Unity's workflow by solving problems as they arose, often spending late nights searching Stack Overflow, experimenting with solutions, and working through bugs on my own. One memorable example came just before I planned to show the finished game to my classmates: prerecorded cutscenes would not play in the HTML5 build. After hours of troubleshooting, I discovered the issue was a Unity bug and eventually found a workaround involving moving the video files into a public folder outside the main game files.

The technical work was only part of the challenge. I frequently moved between Unity, my piano, and FL Studio to compose music for individual levels and musical sequences, while creating the game's visual assets from scratch. I was rushing to finish the project before the school year ended so I could share it with my classmates, which made the final stretch particularly demanding.

Despite the difficulties, I finished the game and was able to share it as intended. More importantly, Bubbo: The Lost Hat represents an early example of the way I still approach creative projects today: combining technical experimentation with music, visual design, and a willingness to build things from scratch. It was one of my first experiences discovering how much I could learn by simply attempting something that initially seemed beyond my ability, and its blend of software, music, and visual design remains representative of my creative voice today."
          media={[
            { type: 'video', src: 'https://www.youtube.com/embed/oesYOPpF8Mw' },
            { type: 'image', src: '/bubbo1.png' },
            { type: 'image', src: '/bubbo2.png' },
          ]}
          onClose={() => setOpen(null)}
        />
      )}
      {open === 'project-2' && (
        <Modal
          title="SADS.club"
          subtitle="Website"
          date="2025"
          description="I developed this website for the Statistics and Data Science Club at SMU while serving as an executive member. I wanted to give the club a more unified identity while also creating a central place for members and prospective members to find information, resources, and opportunities.

At the time, I was experimenting with React and saw the project as an opportunity to strengthen my front-end development skills. As development progressed, however, I realized that a website maintained entirely by a developer would not be practical for a student organization. I therefore expanded the project into a full-stack application, learning Node.js and Google Firestore to build administrative tools that allowed other club members to update the site themselves.

The result was more than a static website: it became a system the club could maintain independently, with tools for managing its content and resources without requiring changes to the underlying code. I also incorporated creative elements into the experience, including a custom animated banner created in Blender."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
           {open === 'project-3' && (
        <Modal
          title="Public Message Board"
          subtitle="Website"
          date="2025"
          description="I developed this website for the Statistics and Data Science Club at SMU while serving as an executive member. I wanted to give the club a more unified identity while also creating a central place for members and prospective members to find information, resources, and opportunities.

At the time, I was experimenting with React and saw the project as an opportunity to strengthen my front-end development skills. As development progressed, however, I realized that a website maintained entirely by a developer would not be practical for a student organization. I therefore expanded the project into a full-stack application, learning Node.js and Google Firestore to build administrative tools that allowed other club members to update the site themselves.

The result was more than a static website: it became a system the club could maintain independently, with tools for managing its content and resources without requiring changes to the underlying code. I also incorporated creative elements into the experience, including a custom animated banner created in Blender."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
                 {open === 'project-4' && (
        <Modal
          title="Speak with an Elephant"
          subtitle="Website"
          date="2025"
          description="I developed this website for the Statistics and Data Science Club at SMU while serving as an executive member. I wanted to give the club a more unified identity while also creating a central place for members and prospective members to find information, resources, and opportunities.

At the time, I was experimenting with React and saw the project as an opportunity to strengthen my front-end development skills. As development progressed, however, I realized that a website maintained entirely by a developer would not be practical for a student organization. I therefore expanded the project into a full-stack application, learning Node.js and Google Firestore to build administrative tools that allowed other club members to update the site themselves.

The result was more than a static website: it became a system the club could maintain independently, with tools for managing its content and resources without requiring changes to the underlying code. I also incorporated creative elements into the experience, including a custom animated banner created in Blender."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}

export default App
