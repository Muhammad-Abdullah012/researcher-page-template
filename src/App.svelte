<script lang="ts">
  import ThemeToggle from "./lib/ThemeToggle.svelte";
  import { fetchCitations } from "./lib/utils/fetchCitations";

  const rssFeedUrl =
    "https://scholar.google.com/citations?user=a7COTC8AAAAJ&hl=en&cstart=0&pagesize=100";

  let isLoading = true;
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
    publications: [] as any[],
    contact: {
      email: "miqbal@ucm.es",
      googleScholar:
        "https://scholar.google.it/citations?user=a7COTC8AAAAJ&hl=en",
      orcid: "0000-0002-1733-2744",
    },
  };

  fetchCitations(rssFeedUrl)
    .then((data) => {
      researcher.publications = data;
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      isLoading = false;
    });
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
      {#if isLoading}
        <div class="text-center">
          <span class="loader"></span>
        </div>
      {:else if researcher.publications.length === 0}
        <p class="text-center text-gray-700 dark:text-gray-300">
          No publications found.
        </p>
      {/if}
      <div class="space-y-4">
        {#each researcher.publications as pub}
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 class="font-medium text-gray-900 dark:text-white">
              {pub.title}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {pub.journal}
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
