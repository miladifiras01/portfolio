<script lang="ts">
  import ProjectModal from "./projectModal.svelte";
  let open = false;
  type Project = {
    name: String;
    description: string;
    images: string[];
    technologies: string[];
    largeDescription: string;
    role: string;
    link: string;
  };
  function close() {
    open = false;
    selectedProject = null;
  }
  function openModal(project: Project) {
    selectedProject = project;
    open = true;
  }
  const projects = [
    {
      name: "CRM - Big Brands Group",
      description:
        "A customer relationship management (CRM) platform designed to streamline operations for Big Brands Group.",
      largeDescription: `<div class="mt-6 space-y-4 lg:mt-10 text-base text-zinc-600 dark:text-zinc-400"> <p>
    Big Brands Group (BBG) is an importer, exporter, distributor, and manufacturer specialized in consumer goods.
  </p>
  <p>
    I contributed to the development of a Customer Relationship Management (CRM) platform for BBG's sales team using Laravel and Angular. The platform includes several key features such as client management, order management, and catalog and product management.
  </p>
  <p>
    My role evolved throughout the project, initially participating in its initiation and later taking full responsibility for its completion, working independently with the Product Owner.
  </p>
  <p>
    Notable achievements include creating a 3D visualization feature for cargo shipments in containers using the Searates API, implementing a bulk client import feature from Excel files, and developing APIs for the mobile application, with a particular focus on access management and data security.
  </p> </div>`,
      role: "Developed interactive dashboards using ApexCharts, automated data import/export with Laravel, and integrated transactional emails via Brevo API.",
      technologies: [
        "Angular",
        "Laravel",
        "ApexCharts",
        "Maatwebsite Excel",
        "Brevo API",
        "GitLab",
      ],
      impact:
        "Reduced client data processing time from hours to seconds. Automated over 5,000 emails, eliminating manual email sending.",
      images: [
        "/images/crm-homepage.png",
        "/images/orders-page.png",
        "/images/clients-page.png",
      ],
      link: "/projects/crm",
    },
    {
      name: "Eventizer",
      description:
        "An event management platform that facilitates mass emailing, certificate distribution, and improved client communication.",
      largeDescription: `<div class="mt-6 space-y-4 lg:mt-10 text-base text-zinc-600 dark:text-zinc-400"> <p>
    <p>Ventizer is a platform dedicated to organizing large-scale events and conferences, developed using Laravel and Angular.</p>
  <p>My role involved updating certain features, such as email functionality and displaying participant data, as well as fixing existing bugs.</p>
  <p>Skills and Technologies Learned:</p>
  <p>Laravel, Angular, API Integration, HTML, CSS, Typescript, Gitlab.</p> </div>`,
      role: "Enhanced email automation using Laravel and Brevo, improved system stability through debugging, and migrated email communication from Brevo to Mailchimp.",
      technologies: [
        "Laravel",
        "Mailchimp API",
        "Brevo API",
        "Angular",
        "GitLab",
      ],
      impact:
        "Optimized mass emailing for event certificates, ensuring seamless delivery to participants.",
      images: [
        "/images/eventizer-homepage.png",
        "/images/participants-list.png",
        // "/images/eventizer-feature-2.png",
      ],
      link: "/projects/eventizer",
    },
    {
      name: "Goodle",
      description:
        "A corporate social responsibility (CSR) platform aimed at engaging businesses in impactful initiatives.",
      largeDescription: `<div class="mt-6 space-y-4 lg:mt-10 text-base text-zinc-600 dark:text-zinc-400"> <p>
     <p>Goodle is a Software as a Service (SaaS) platform designed to bridge the gap between employees' professional skills and the needs of NGOs.</p>
  <p>By combining these two elements, Goodle facilitates volunteer work in a meaningful way, strengthening the social impact of businesses and helping NGOs achieve their goals more effectively.</p>
  <p>Developed with Dotnet and React JS.</p>
  <p>In the context of this year-end project carried out with two other colleagues, my main tasks included:</p>
  <p>Developing the search filter, designing the sign-up and login interfaces, and modifying the user interface (UI) to make the platform responsive, ensuring optimal use across all types of devices (desktops, tablets, mobiles).</p>
 </div>`,
      role: "Led authentication system development, implemented CRUD operations, and improved responsiveness across various devices.",
      technologies: ["Next.js", "React", "TypeScript", ".NET (C#)", "GitHub"],
      impact:
        "Ensured secure user authentication and improved usability across different screen sizes.",
      images: [
        "/images/goodle-homepage.png",
        "/images/mission-page.png",
        // "/images/goodle-feature-2.png",
      ],
      link: "/projects/goodle",
    },
  ];
  let selectedProject: Project | null = null;
</script>

<svelte:head>
  <title>Projects - Firas Miladi</title>
  <meta name="description" content="About this app" />
</svelte:head>
<main>
  <div class="sm:px-8 mt-16 sm:mt-32">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <header class="max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            >
              Projects I’ve contributed to.
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Throughout my time at Vayetek and in my academic journey, I’ve
              worked on projects that solve real-world problems. I’ve
              contributed to key features, improved performance, and helped
              shape better user experiences. Here are some of the projects I’ve
              been a part of.
            </p>
          </header>
          <div class="mt-16 sm:mt-20">
            <div class="mb-20">
              <h2
                class="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl"
              >
                Websites
              </h2>
              <ul
                class="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              >
                {#each projects as project}
                  <li class="group relative flex flex-col items-start">
                    <a
                      on:click={() => openModal(project)}
                      class="cursor-pointer"
                    >
                      <div
                        class="relative z-10 flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                      >
                        <img
                          alt={project.name}
                          src={project.images[0]}
                          class="h-full w-full"
                          loading="lazy"
                          style="color: transparent;"
                        />
                      </div>
                      <h3
                        class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100"
                      >
                        <span class="relative z-10">{project.name}</span>
                      </h3>
                      <p
                        class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {project.description}
                      </p>
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<ProjectModal {open} {close} project={selectedProject} />
