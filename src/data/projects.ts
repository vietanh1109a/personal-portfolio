export type Project = {
  title: string;
  summary: string;
  features: string[];
  tech: string[];
  image: string;
  alt: string;
  proof: string;
  repository: string;
};

export const projects: Project[] = [
  {
    title: "Python Web Scraping & Data Extraction Pipeline",
    summary: "Collects and monitors public web data, tracks changes, and exports structured CSV/Excel reports.",
    features: [
      "Static and JavaScript-rendered extraction",
      "Configurable selectors and normalization",
      "Historical product snapshots",
      "Price and availability change detection",
      "CSV and formatted Excel exports",
    ],
    tech: ["Python", "httpx", "BeautifulSoup", "Playwright", "pandas", "SQLAlchemy", "SQLite", "openpyxl"],
    image: "/projects/scraping-proof.webp",
    alt: "Actual monitoring report and terminal execution from the web scraping project",
    proof: "Actual monitoring report + demo execution",
    repository: "https://github.com/vietanh1109a/python-web-scraping-data-pipeline",
  },
  {
    title: "Python Webhook & API Automation Service",
    summary: "Processes incoming webhook data, prevents duplicates, integrates external APIs, and produces structured outputs.",
    features: [
      "Input validation and normalization",
      "Database-level duplicate protection",
      "External API retry/timeout handling",
      "REST endpoints and filtering",
      "CSV and Excel export",
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "pandas", "httpx", "openpyxl", "SQLite", "pytest"],
    image: "/projects/api-proof.webp",
    alt: "Actual FastAPI documentation and Excel export from the webhook automation service",
    proof: "Actual FastAPI endpoints + Excel export",
    repository: "https://github.com/vietanh1109a/python-webhook-api-automation",
  },
  {
    title: "Automated Sales Report Generator",
    summary: "Transforms raw sales CSV data into cleaned datasets, business KPIs, analytics, and formatted Excel reports.",
    features: [
      "Cleaning and validation",
      "Duplicate handling",
      "KPI calculation",
      "Product and monthly analysis",
      "Excel reports and charts",
    ],
    tech: ["Python", "pandas", "Microsoft Excel", "openpyxl"],
    image: "/projects/sales-report-proof.webp",
    alt: "Actual sales report with key performance indicators and revenue charts",
    proof: "Actual generated Excel report",
    repository: "https://github.com/vietanh1109a/python-sales-report-automation",
  },
];
