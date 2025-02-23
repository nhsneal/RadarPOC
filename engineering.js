radarEngineeringData = {
  svg_id: "radar",
  width: 1450,
  height: 1200,
  colors: {
    background: "#fff",
    grid: "#bbb",
    inactive: "#ddd"
  },
  title: "Tech Radar - Engineering - April 2022",
  quadrants: [
    { name: "Code analysis" },  // quadrant 0
    { name: "Test tools" },     // quadrant 1
    { name: "Build tools" },    // quadrant 2
    { name: "Observability" }   // quadrant 3
  ],
  rings: [
    { name: "MAINSTREAM", color: "#93c47d" }, // ring 0
    { name: "PROPOSED", color: "#93d2c2" },   // ring 1
    { name: "CONTAIN", color: "#fbdb84" },    // ring 2
    { name: "AVOID", color: "#efafa9" }       // ring 3
  ],
  print_layout: true,
  entries: [
    // Code analysis
    { quadrant: 0, ring: 0, label: "EditorConfig", moved: 0, active: false, link: "https://editorconfig.org/" },
    { quadrant: 0, ring: 0, label: "eslint", moved: 0, active: false, link: "https://eslint.org/" },
    { quadrant: 0, ring: 0, label: "flake8", moved: 0, active: false, link: "https://flake8.pycqa.org/" },
    { quadrant: 0, ring: 0, label: "pylint", moved: 0, active: false, link: "https://pylint.pycqa.org/" },
    { quadrant: 0, ring: 0, label: "SonarQube", moved: 0, active: false, link: "https://www.sonarqube.org/" },
    { quadrant: 0, ring: 0, label: "tslint", moved: 0, active: false, link: "https://palantir.github.io/tslint/" },
    { quadrant: 0, ring: 1, label: "AWS CodeGuru", active: false, link: "#", moved: 0},
    { quadrant: 0, ring: 1, label: "Dependabot", active: false, link: "#", moved: 0 },
    { quadrant: 0, ring: 1, label: "grype", moved: 0, active: false, link: "https://github.com/anchore/grype" },
    { quadrant: 0, ring: 1, label: "SonarCloud", moved: 0, active: false, link: "https://sonarcloud.io/" },
    { quadrant: 0, ring: 1, label: "syft", moved: 0, active: false, link: "https://github.com/anchore/syft" },
    { quadrant: 0, ring: 1, label: "tfsec", moved: 0, active: false, link: "https://aquasecurity.github.io/tfsec/" },
    {
      quadrant: 0,
      ring: 1,
      label: "Whitesource Bolt",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "AWS Container scanning",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "BlackDuck",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 1,
      label: "snyk.io",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 0,
      ring: 0,
      label: "nhsd-git-secrets",
      active: true,
      link: "https://github.com/NHSDigital/software-engineering-quality-framework/tree/main/tools/nhsd-git-secrets",
      moved: 0
    },
    // Test tools
    { quadrant: 1, ring: 0, label: "BrowserStack", moved: 0, active: false, link: "../data_processing/aws_emr.html" },
    { quadrant: 1, ring: 0, label: "Cucumber", moved: 0, active: false, link: "../data_processing/aws_emr.html" },
    { quadrant: 1, ring: 0, label: "WireMock", moved: 0, active: false, link: "#" },
    { quadrant: 1, ring: 1, label: "jest", moved: 0, active: false, link: "https://github.com/facebook/jest" },
    { quadrant: 1, ring: 1, label: "mocha", moved: 0, active: false, link: "https://mochajs.org/" },
    { quadrant: 1, ring: 1, label: "pytest", moved: 0, active: false, link: "https://pytest.org/" },
    { quadrant: 1, ring: 2, label: "LocalStack", moved: 0, active: false, link: "#" },
    { quadrant: 1, ring: 2, label: "unittest", moved: 0, active: false, link: "https://docs.python.org/3/library/unittest.html" },
    {
      quadrant: 1,
      ring: 0,
      label: "Gatling",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Axe",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Moto",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Postman",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 1,
      label: "Wave",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Locust",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Gerkin",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Specflow",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "Jmeter",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 2,
      label: "Neoload",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 1,
      ring: 0,
      label: "selenium",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    // Build tools
    { quadrant: 2, ring: 0, label: "Docker", moved: 0, active: false, link: "https://www.docker.com/" },
    { quadrant: 2, ring: 0, label: "make", moved: 0, active: false, link: "https://www.gnu.org/software/make/" },
    { quadrant: 2, ring: 0, label: "Maven", moved: 0, active: false, link: "https://maven.apache.org/" },
    { quadrant: 2, ring: 0, label: "Visual Studio Code", moved: 0, active: false, link: "https://code.visualstudio.com/" },
    { quadrant: 2, ring: 1, label: "CircleCI", moved: 0, active: false, link: "https://circleci.com/" },
    { quadrant: 2, ring: 1, label: "GitHub Codespaces", moved: 0, active: false, link: "https://github.com/features/codespaces" },
    { quadrant: 2, ring: 1, label: "Jekyll", moved: 0, active: false, link: "https://jekyllrb.com/" },
    { quadrant: 2, ring: 1, label: "Pulumi", moved: 0, active: false, link: "https://www.pulumi.com/" },
    { quadrant: 2, ring: 1, label: "Serverless Framework", moved: 0, active: false, link: "https://www.serverless.com/" },
    { quadrant: 2, ring: 1, label: "Yarn", moved: 0, active: false, link: "https://yarnpkg.com/" },
    { quadrant: 2, ring: 2, label: "Ansible", moved: 0, active: false, link: "https://www.ansible.com/" },
    { quadrant: 2, ring: 2, label: "Chef", moved: 0, active: false, link: "https://www.chef.io/" },
    { quadrant: 2, ring: 2, label: "Gradle", moved: 0, active: false, link: "https://gradle.org/" },
    { quadrant: 2, ring: 2, label: "Packer", moved: 0, active: false, link: "https://www.packer.io/" },
    { quadrant: 2, ring: 2, label: "Physical Developer Laptops", moved: 0, active: false, link: "#" },
    { quadrant: 2, ring: 2, label: "Puppet", moved: 0, active: false, link: "https://puppet.com/" },
    { quadrant: 2, ring: 2, label: "Vagrant", moved: 0, active: false, link: "https://www.vagrantup.com/" },
    { quadrant: 2, ring: 2, label: "VirtualBox", moved: 0, active: false, link: "https://www.virtualbox.org/" },
    {
      quadrant: 2,
      ring: 0,
      label: "Azure Devops",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 1,
      label: "GitHub",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "GitLab (CDT)",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "GitLab (self-hosted)",
      active: false,
      link: "#",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "AWS CodePipeline",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Concourse CI",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Jenkins",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "SVN",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Team City",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "Team Foundation Services",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 0,
      label: "Travis CI",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 2,
      ring: 3,
      label: "VSS",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    // Observability
    { quadrant: 3, ring: 1, label: "Slack", moved: 0, active: false, link: "https://slack.com/" },
    {
      quadrant: 3,
      ring: 1,
      label: "DataDog",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Instana",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 2,
      label: "Nagios",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "New Relic",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Pingdom",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Prometheus",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 0,
      label: "Splunk",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "Status Cake",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
    {
      quadrant: 3,
      ring: 1,
      label: "UptimeRobot",
      active: false,
      link: "../data_processing/aws_emr.html",
      moved: 0
    },
  ]
};
