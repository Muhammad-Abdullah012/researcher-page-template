<script lang="ts">
  import ThemeToggle from "./lib/ThemeToggle.svelte";

  const researcher = {
    name: "Dr. Muhammad Ahsan Iqbal",
    title: "Postdoc MSCA (Chemical and Materials)",
    institution: "Universidad Complutense de Madrid: Madrid, ES",
    expertise: [
      "Multi-functional Coatings",
      "Corrosion",
      "Plasma electrolytic oxidation",
      "Environmental and Chemical",
    ],
    bio: "I'm passionate about developing innovative, eco-friendly solutions for corrosion protection and surface engineering, bridging the gap between research and real-world applications.",
    education: [
      {
        degree:
          "PhD Material, mechatronics and system engineering (Industrial engineering)",
        institution: "University of Trento: Trento, IT",
        year: "2017 - PRESENT",
      },
      {
        degree: "Visiting Research Scholar (Institute of materials science)",
        institution: "University of Connecticut: Storrs, CT, US",
        year: "2018 - 2019",
      },
      {
        degree: "MSc Advance Materials Sciences (Materials)",
        institution:
          "National university of Science and Technology MISIS Moscow: Moscow, Moscow, RU",
        year: "2015 - 2017",
      },
      {
        degree: "BSc Engineering (Chemical Engineering)",
        institution: "Bahauddin Zakariya University: Multan, Punjab, PK",
        year: "2010 - 2014",
      },
    ],
    publications: [
      {
        title:
          "Effect of synthesis conditions on the controlled growth of MgAl-LDH corrosion resistance film: structure and corrosion resistance properties",
        journal: "Coatings",
        year: "2019",
        doi: "N/A",
        citations: 64,
      },
      {
        title:
          "The effect of the surface morphologies on the corrosion resistance of in situ growth MgAl-LDH based conversion film on AA6082",
        journal: "Surface and Coatings Technology",
        year: "2018",
        doi: "N/A",
        citations: 54,
      },
      {
        title:
          "Layered double hydroxide protective films developed on aluminum and aluminum alloys: synthetic methods and anti-corrosion mechanisms",
        journal: "Coatings",
        year: "2020",
        doi: "N/A",
        citations: 52,
      },
      {
        title:
          "In situ growth of a CaAl-NO3--layered double hydroxide film directly on an aluminum alloy for corrosion resistance",
        journal: "Dalton Transactions",
        year: "2020",
        doi: "N/A",
        citations: 51,
      },
      {
        title:
          "Double doped cerium-based superhydrophobic layered double hydroxide protective films grown on anodic aluminium surface",
        journal: "Journal of Alloys and Compounds",
        year: "2020",
        doi: "N/A",
        citations: 39,
      },
      {
        title:
          "MgAl-LDH/graphene protective film: Insight into LDH-graphene interaction",
        journal: "Surface and Coatings Technology",
        year: "2020",
        doi: "N/A",
        citations: 34,
      },
      {
        title:
          "Protective Cerium-Based Layered Double Hydroxides Thin Films Developed on Anodized AA6082",
        journal: "Advances in Materials Science and Engineering",
        year: "2020",
        doi: "N/A",
        citations: 27,
      },
      {
        title:
          "Effect of operating parameters on the structural growth of ZnAl layered double hydroxide on AA6082 and corresponding corrosion resistance properties",
        journal: "Journal of Coatings Technology and Research",
        year: "2019",
        doi: "N/A",
        citations: 26,
      },
      {
        title:
          "Fire retardancy of aluminum hydroxide reinforced flame retardant modified epoxy resin composite",
        journal: "Russian Journal of Applied Chemistry",
        year: "2018",
        doi: "N/A",
        citations: 25,
      },
      {
        title:
          "Chlorides entrapment capability of various in-situ grown NiAl-LDHs: Structural and corrosion resistance properties",
        journal: "Coatings",
        year: "2020",
        doi: "N/A",
        citations: 20,
      },
      {
        title:
          "Synthesis of novel cone-shaped CaAl-LDH directly on aluminum alloy by a facile urea hydrolysis method",
        journal: "SN Applied Sciences",
        year: "2019",
        doi: "N/A",
        citations: 17,
      },
      {
        title:
          "Ordering and disordering of in situ grown MgAl-layered double hydroxide and its effect on the structural and corrosion resistance properties",
        journal: "International Journal of Minerals, Metallurgy and Materials",
        year: "2019",
        doi: "N/A",
        citations: 16,
      },
      {
        title:
          "Sorption of As(V) from aqueous solution using in situ growth MgAl-NO3 layered double hydroxide thin film developed on AA6082",
        journal: "SN Applied Sciences",
        year: "2019",
        doi: "N/A",
        citations: 12,
      },
      {
        title:
          "Role of anodic precursor layer thickness on PEO coatings: Energy consumption and long-term corrosion performance",
        journal: "Surface and Coatings Technology",
        year: "2024",
        doi: "N/A",
        citations: 5,
      },
      {
        title:
          "Ce-Doped-MgAl Superhydrophobic Layered Double Hydroxide for Enhanced Corrosion Resistance Properties",
        journal: "Solids",
        year: "2021",
        doi: "N/A",
        citations: 5,
      },
    ],
    contact: {
      email: "miqbal@ucm.es",
      googleScholar:
        "https://scholar.google.it/citations?user=a7COTC8AAAAJ&hl=en",
      orcid: "0000-0002-1733-2744",
    },
  };
</script>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
  <ThemeToggle />

  <!-- Header/Hero Section -->
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {researcher.name}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-2">
          {researcher.title}
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {researcher.institution}
        </p>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <!-- Expertise -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Areas of Expertise
      </h2>
      <div class="flex flex-wrap gap-2">
        {#each researcher.expertise as area}
          <span
            class="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 px-3 py-1 rounded-full text-sm"
          >
            {area}
          </span>
        {/each}
      </div>
    </div>

    {#if researcher.bio}
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Biography
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {researcher.bio}
        </p>
      </div>
    {/if}
    <!-- Education -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Education
      </h2>
      <div class="space-y-4">
        {#each researcher.education as edu}
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 class="font-medium text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {edu.institution}, {edu.year}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Publications -->
    <div class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Publications
      </h2>
      <div class="space-y-4">
        {#each researcher.publications as pub}
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 class="font-medium text-gray-900 dark:text-white">
              {pub.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {pub.journal}, {pub.year}
            </p>
            <div class="flex justify-between items-center mt-2">
              <p class="text-gray-500 dark:text-gray-400 text-sm">
                DOI: {pub.doi ?? "N/A"}
              </p>
              <span
                class="text-primary-600 dark:text-primary-400 text-sm font-medium"
              >
                Citations: {pub.citations}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Contact -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Contact & Links
      </h2>
      <div class="space-y-2">
        <p class="text-gray-700 dark:text-gray-300">
          <span class="font-medium">Email:</span>
          <a
            href="mailto:{researcher.contact.email}"
            class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            {researcher.contact.email}
          </a>
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          <span class="font-medium">Google Scholar:</span>
          <a
            href={researcher.contact.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            {researcher.name}
          </a>
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          <span class="font-medium">ORCID:</span>
          <a
            href="https://orcid.org/{researcher.contact.orcid}"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            {researcher.contact.orcid}
          </a>
        </p>
      </div>
    </div>
  </div>
</main>
