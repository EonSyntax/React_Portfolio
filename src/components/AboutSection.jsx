import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative min-h-screen"
    >
      {" "}
      <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
              <p className="text-muted-foreground">
                I'm Emmanuel Adebanji, a dedicated Full-Stack Developer with a
                passion for crafting seamless web experiences. With expertise in
                React, Node.js, and a variety of modern technologies, I build
                responsive and user-friendly web applications that meet the needs
                of my clients.
              </p>
              <p className="text-muted-foreground">
                Beyond coding, I enjoy sharing my knowledge through tech
                tutorials and engaging with the developer community. When I'm not
                coding, you can find me exploring new tech trends or working on
                personal projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {" "}
                  Get In Touch
                </a>

                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-block text-center">
                  {" "}
                  Download CV
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                    <div className="text-left ">
                      <h4 className="text-lg font-semibold">Web Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building responsive and dynamic websites using modern
                        technologies like React, Node.js, and more.
                      </p>
                    </div>

                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                    <div className="text-left ">
                      <h4 className="text-lg font-semibold">Web Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building responsive and dynamic websites using modern
                        technologies like React, Node.js, and more.
                      </p>
                    </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                    <div className="text-left ">
                      <h4 className="text-lg font-semibold">Web Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building responsive and dynamic websites using modern
                        technologies like React, Node.js, and more.
                      </p>
                    </div>
                </div>
              </div>

            </div>
          </div>
      </div>
    </section>
  );
};