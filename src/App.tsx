import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope, faXmark, faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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
  link,
  onClose,
}: {
  title?: string
  subtitle?: string
  date?: string
  description?: string
  media?: Array<{ type: 'image' | 'video'; src: string }>
  link?: string
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
        {link && (
          <a
            className="modal-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Open Link</span>
          </a>
        )}
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
              Studying Computer Science at UT Dallas. Builds full-stack web apps with a focus on AI integration, intuitive user experience, and thoughtful code structure.
            </p>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="section-container">
          <h2>Relevant Work Experience</h2>
          <div className="cards">
            <button className="card" onClick={() => setOpen('work-1')}>
              <div className="card-image">
                <img src="/classfindr.jpg" alt="" />
              </div>
              <div className="card-content">
                <h3>ClassFindr</h3>
                <p>Full-stack Software Engineer</p>
              </div>
            </button>
            <button className="card" onClick={() => setOpen('work-2')}>
              <div className="card-image">
                <img src="/wolfpack.jpg" alt="" />
              </div>
              <div className="card-content">
                <h3>WolfPack DNA</h3>
                <p>Web Developer (Volunteer)</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="section-container2">
          <h2>Projects</h2>
          <div className="cards">
                        <button className="card" onClick={() => setOpen('project-5')}>
              <div className="card-image">
                <img src="/noteself.jpg" alt="" />
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
          title="ClassFindr"
          subtitle="Full Stack Software Engineer"
          date="May 2026 - Aug 2026"
          description="I worked as a full-stack software developer on ClassFindr, a platform designed to help students navigate the often complicated process of choosing courses, transferring credits, planning degrees, and working toward long-term academic goals.

A major part of my work involved expanding the platform for K–12 and prospective college students. I helped develop a new user experience that allowed students to explore colleges and degree programs based on factors such as career goals, interests, location, cost, and time to graduation. I also implemented application-tracking functionality and considered how the K-12 experience could transition naturally into the existing college-student experience.

Because I was developing a product intended to solve problems I had personally encountered, I frequently contributed my perspective during product and engineering discussions. I was also involved in user research alongside the product team, working with a K-12 student to gather feedback on the features I was developing. My own experience transferring colleges provided another perspective when evaluating the platform's academic-planning and transfer workflows.

The project also gave me experience working within a professional software-development environment, including sprint planning, story reviews, pull requests, task coordination, and regular communication with the development and product teams. On the technical side, I worked primarily with Vue.js, TypeScript, Node.js, Prisma, and RabbitMQ."
          media={[{ type: 'image', src: placeholder }]}
          onClose={() => setOpen(null)}
        />
      )}
      {open === 'work-2' && (
        <Modal
          title="WolfPack DNA"
          subtitle="Web Developer (Volunteer)"
          date="May 2026 - Aug 2026"
          link="https://wolfpackdna.org"
          description="Designed and developed a full-stack website from the ground up for a nonprofit specializing in DNA-based criminal case investigations, using React, TypeScript, Node.js, Google Firestore, and Google Cloud.

Built a secure admin dashboard with authenticated login, enabling non-technical staff to independently manage cases, team members, images, and embedded donation links without developer assistance.

Collaborated directly with the client throughout the design process, carefully considering UI/UX for a broad demographic to ensure the site was intuitive and accessible to all users.

Integrated inquiry forms with Nodemailer to route client submissions directly to the team, and advised the organization on implementing a privacy policy to align with data collection requirements.

Maintained the site post-launch, resolving bugs and inconsistencies surfaced through real user activity."
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
          link="https://sads.club"
          description="I developed this website for the Statistics and Data Science Club at SMU while serving as an executive member. I wanted to give the club a more unified identity while also creating a central place for members and prospective members to find information, resources, and opportunities.

At the time, I was experimenting with React and saw the project as an opportunity to strengthen my front-end development skills. As development progressed, however, I realized that a website maintained entirely by a developer would not be practical for a student organization. I therefore expanded the project into a full-stack application, learning Node.js and Google Firestore to build administrative tools that allowed other club members to update the site themselves.

The result was more than a static website: it became a system the club could maintain independently, with tools for managing its content and resources without requiring changes to the underlying code. I also incorporated creative elements into the experience, including a custom animated banner created in Blender."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
           {open === 'project-3' && (
        <Modal
          title="Full-Stack Messaging System"
          subtitle="Website"
          date="2025"
          description="I built this feature-rich messaging and comment system from scratch as a reusable component for future projects. The goal was to strengthen my full-stack skills while creating a system that could eventually be integrated into other applications rather than remaining a standalone project.

The project gave me hands-on experience designing and working with servers, databases, and backend architecture, while also focusing heavily on the user experience. Features include file attachments and previews, nested replies, custom polls, and intuitive message interactions. Building the system as a reusable foundation also required me to consider how its functionality could be adapted and integrated into larger applications.My goal with this project was to create a feature rich comment/messages system from scratch using the full-stack skills I had at the time. Working on this was a valuable learning experience as it helped me refine my backend skills, particularly with creating and using servers and databases. This app features file attachments/previews, nested replies, custom polls, and an intuitive user experience."
          media={[{ type: 'image', src: '/messages1.png' },
            {type: 'image', src: '/messages2.png'}
          ]}
          onClose={() => setOpen(null)}
        />
      )}
                 {open === 'project-4' && (
        <Modal
          title="Speak with an Elephant"
          subtitle="Website"
          date="2025"
          description="Speak with an Elephant was a project I created for HackSMU VII, where the challenge centered on understanding and preserving elephant communication. I took a playful approach by building an interactive app that effectively lets users “speak” with an elephant.

I began by processing the 43 provided audio files with Python, separating them into 212 distinct elephant sounds. I then developed another Python script to categorize the sounds based on characteristics such as volume, dynamics, and duration. Using these categories, I created a dictionary assigning each sound an English meaning, carefully structuring the vocabulary so the sounds could be combined to express a wide range of common sentences.

With the dictionary established, I integrated the Claude API as a translation layer, using the custom sound-to-meaning dictionary as its reference. The result was an interactive system that could translate English into sequences of elephant sounds, allowing users to communicate with an elephant—or at least simulate doing so."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
                       {open === 'project-5' && (
        <Modal
          title="Note to Self"
          subtitle="App"
          date="2026"
          description="The vision for Note to Self is to build a fully functional digital audio workstation (DAW) that runs directly in the browser, allowing users to quickly compose complete musical pieces. The DAW will serve as the foundation for a multiplayer party game in which players receive a word or theme and must create a musical interpretation of it while others try to guess what they were given.

The project combines creative game design with technically complex systems, including real-time MIDI device integration, audio composition, servers, databases, and WebSockets. I’m building the DAW from scratch as the foundation for the larger multiplayer experience."
          media={[{ type: 'video', src: 'https://www.youtube.com/embed/SD5RZj9vL0Y' }]}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}

export default App
