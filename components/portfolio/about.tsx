'use client'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-balance mb-4">About & Expertise</h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Comprehensive technical and business acumen with a proven track record of delivering transformative solutions.
          </p>
        </div>

        {/* GPA Highlight Card with glass effect */}
        <div className="mb-16 backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:bg-card/70 transition-all duration-300">
          <p className="text-foreground/60 text-sm font-medium mb-3">Academic Excellence</p>
          <div className="flex items-baseline gap-4">
            <span className="text-6xl font-bold text-foreground">3.60</span>
            <span className="text-2xl text-foreground/50 font-light">/4.0 GPA</span>
          </div>
          <p className="text-foreground/50 text-sm mt-4">Ho Chi Minh University of Education</p>
        </div>

        {/* Skills Grid with glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Analysis Skills */}
          <div className="group backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/70 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-6">Analysis</h3>
            <ul className="space-y-3 text-foreground/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>BPMN & Flowchart Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Requirements Specification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>System Thinking & Logic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Data Extraction & Processing</span>
              </li>
            </ul>
          </div>

          {/* Development Skills */}
          <div className="group backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/70 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-6">Development</h3>
            <ul className="space-y-3 text-foreground/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Google Apps Script</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>HTML & CSS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>SQL Databases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Google Workspace Toolkit</span>
              </li>
            </ul>
          </div>

          {/* Process & Soft Skills */}
          <div className="group backdrop-blur-lg bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card/70 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-6">Leadership</h3>
            <ul className="space-y-3 text-foreground/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>SDLC & Agile/Scrum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Team Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Critical Problem Solving</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-1.5 flex-shrink-0">▸</span>
                <span>Strategic Communication</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Languages & Proficiencies */}
        <div className="backdrop-blur-lg bg-card/40 border border-border/50 rounded-2xl p-8 md:p-10">
          <h3 className="text-lg font-semibold text-foreground mb-6">Languages & Proficiencies</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2.5 backdrop-blur-md bg-background/40 border border-border/50 rounded-full text-sm text-foreground/70 hover:bg-background/60 transition-colors">
              Vietnamese (Native)
            </span>
            <span className="px-4 py-2.5 backdrop-blur-md bg-background/40 border border-border/50 rounded-full text-sm text-foreground/70 hover:bg-background/60 transition-colors">
              English (Fluent)
            </span>
            <span className="px-4 py-2.5 backdrop-blur-md bg-background/40 border border-border/50 rounded-full text-sm text-foreground/70 hover:bg-background/60 transition-colors">
              Chinese (HSK Level 3)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
