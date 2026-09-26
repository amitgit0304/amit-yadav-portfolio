export type Cloud = "AWS" | "Azure";
export type Platform = "Snowflake" | "Iceberg" | "Databricks" | "Power BI";
export type ProjectType = "Migration" | "Orchestration" | "BI" | "Governance";

export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  role: string;
  cloud: Cloud[];
  platforms: Platform[];
  type: ProjectType[];
  stack: string[];
  outcomes: string[];
  problem: string;
  constraints: string[];
  approach: string[];
  implementation: string[];
  lessons: string[];
  next: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "snowflake-iceberg-migration",
    title: "Snowflake + Apache Iceberg Migration",
    client: "Anonymized FinTech client",
    summary:
      "A phased migration to an open table format, preserving governed Snowflake access while reducing platform coupling.",
    role: "Data Engineer & Platform Consultant",
    cloud: ["AWS"],
    platforms: ["Snowflake", "Iceberg"],
    type: ["Migration", "Governance"],
    stack: ["Snowflake", "Apache Iceberg", "AWS Glue", "S3", "Python", "Terraform"],
    outcomes: [
      "Targeted ~30–45% lower storage duplication",
      "Designed for zero-downtime domain cutovers",
    ],
    problem:
      "Analytics data was tightly coupled to a single compute platform, with duplicated storage and inconsistent ownership boundaries.",
    constraints: [
      "No disruption to business-critical reporting",
      "Existing security policies had to remain enforceable",
      "Rollback was required at every migration wave",
    ],
    approach: [
      "Profiled workloads and classified tables by risk and access pattern",
      "Defined an Iceberg catalog, partitioning, and compaction strategy",
      "Used reconciliation gates and dual reads before each cutover",
    ],
    implementation: [
      "Infrastructure modules for encrypted S3 storage and catalog resources",
      "Automated schema compatibility and row-level reconciliation checks",
      "Runbooks covering cutover, rollback, and incident ownership",
    ],
    lessons: [
      "Table-format migration is primarily an operating-model change",
      "Compaction and metadata maintenance need explicit SLOs",
    ],
    next: ["Automate cost attribution by domain", "Evaluate cross-engine workload routing"],
    accent: "cyan",
  },
  {
    slug: "dagster-elt-orchestration",
    title: "Dagster Orchestration for ELT",
    client: "Anonymized Retail client",
    summary:
      "Asset-based orchestration that made lineage, ownership, freshness, and backfills first-class capabilities.",
    role: "Lead Data Engineer",
    cloud: ["AWS"],
    platforms: ["Snowflake"],
    type: ["Orchestration"],
    stack: ["Dagster", "dbt", "Snowflake", "Python", "Docker", "GitHub Actions"],
    outcomes: ["Targeted ~35–50% faster incident triage", "Reduced manual backfill steps"],
    problem:
      "Cron-driven pipelines obscured dependencies and made partial reruns risky and slow.",
    constraints: ["Mixed Python and SQL workloads", "Incremental migration from legacy schedules"],
    approach: [
      "Modeled business datasets as software-defined assets",
      "Introduced partitions, checks, sensors, and explicit owners",
      "Migrated domain by domain behind feature flags",
    ],
    implementation: [
      "Reusable resource and IO manager patterns",
      "Freshness policies and structured metadata",
      "CI checks for definitions, dbt manifests, and unit tests",
    ],
    lessons: ["Asset boundaries should reflect ownership", "Backfill design belongs in initial modeling"],
    next: ["Add data contracts at ingestion", "Introduce cost-aware concurrency controls"],
    accent: "violet",
  },
  {
    slug: "aws-clean-rooms-collaboration",
    title: "Privacy-Safe Data Collaboration",
    client: "Anonymized Media client",
    summary:
      "An AWS Clean Rooms collaboration pattern for aggregate measurement without exposing row-level partner data.",
    role: "Data & Privacy Architecture Consultant",
    cloud: ["AWS"],
    platforms: ["Snowflake"],
    type: ["Governance"],
    stack: ["AWS Clean Rooms", "S3", "Glue", "Lake Formation", "SQL", "CloudTrail"],
    outcomes: ["Enabled controlled aggregate insights", "Minimized data-copying exposure"],
    problem:
      "Partners needed shared campaign measurement without exchanging directly identifiable customer records.",
    constraints: ["Strict query controls", "Auditable access", "No raw-record export"],
    approach: [
      "Mapped permitted questions to analysis rules",
      "Applied data minimization and join-key governance",
      "Designed approval, monitoring, and offboarding workflows",
    ],
    implementation: [
      "Restricted analysis templates and output thresholds",
      "CloudTrail-aligned audit events and operational alerts",
      "Threat model and partner onboarding checklist",
    ],
    lessons: ["Privacy controls must match specific use cases", "Join-key quality drives usable reach"],
    next: ["Add differential privacy evaluation", "Automate partner data-quality scorecards"],
    accent: "emerald",
  },
  {
    slug: "data-quality-schema-drift",
    title: "Data Quality & Schema Drift Platform",
    client: "Anonymized SaaS client",
    summary:
      "A reusable validation layer that detects breaking schema changes before they reach analytics consumers.",
    role: "Data Platform Engineer",
    cloud: ["AWS"],
    platforms: ["Iceberg"],
    type: ["Governance", "Orchestration"],
    stack: ["Python", "Great Expectations", "Iceberg", "EventBridge", "CloudWatch"],
    outcomes: ["Targeted ~40–60% fewer downstream incidents", "Faster owner notification"],
    problem:
      "Unannounced source changes created silent null inflation and downstream dashboard failures.",
    constraints: ["High event volume", "Different domain tolerances", "Low operational overhead"],
    approach: [
      "Separated contract checks from statistical anomaly checks",
      "Created severity-based quarantine and notification policies",
      "Published quality status with dataset metadata",
    ],
    implementation: [
      "Schema compatibility service and configurable expectation suites",
      "Dead-letter workflow with replay support",
      "Operational dashboards for freshness and validation failures",
    ],
    lessons: ["Not every drift event is an incident", "Ownership metadata is essential for response"],
    next: ["Learn seasonal thresholds", "Integrate producer-side contract testing"],
    accent: "amber",
  },
  {
    slug: "adf-lakehouse-integration",
    title: "ADF + Lakehouse Integration",
    client: "Anonymized Manufacturing client",
    summary:
      "Metadata-driven Azure Data Factory ingestion into a governed lakehouse with repeatable deployment.",
    role: "Cloud Data Engineer",
    cloud: ["Azure"],
    platforms: ["Databricks"],
    type: ["Migration", "Orchestration"],
    stack: ["Azure Data Factory", "ADLS Gen2", "Databricks", "Delta Lake", "Key Vault"],
    outcomes: ["Targeted ~30–50% shorter onboarding cycles", "Standardized recovery patterns"],
    problem:
      "Point-to-point pipelines were difficult to operate and expensive to extend for new sources.",
    constraints: ["Hybrid connectivity", "Variable source schemas", "Environment isolation"],
    approach: [
      "Created metadata-driven ingestion templates",
      "Separated raw, validated, and curated data layers",
      "Implemented parameterized CI/CD promotion",
    ],
    implementation: [
      "Incremental loads with watermarks and idempotent writes",
      "Key Vault-backed secrets and managed identities",
      "Centralized pipeline telemetry and retry policies",
    ],
    lessons: ["Metadata frameworks need strong guardrails", "Source-specific behavior should stay isolated"],
    next: ["Add automated lineage publication", "Tune clusters from workload telemetry"],
    accent: "blue",
  },
  {
    slug: "power-bi-modernization",
    title: "Power BI Analytics Modernization",
    client: "Anonymized Services client",
    summary:
      "A governed semantic model and dashboard redesign focused on trustworthy metrics and faster decisions.",
    role: "Analytics Engineer",
    cloud: ["Azure"],
    platforms: ["Power BI", "Snowflake"],
    type: ["BI", "Governance"],
    stack: ["Power BI", "DAX", "Snowflake", "dbt", "Azure DevOps"],
    outcomes: ["Targeted ~25–40% faster report loads", "Consolidated duplicate KPI definitions"],
    problem:
      "Teams used conflicting KPI definitions across slow, duplicated reports.",
    constraints: ["Existing user workflows", "Row-level security", "Limited refresh windows"],
    approach: [
      "Created a certified metric and dimensional model inventory",
      "Reduced model cardinality and optimized DAX",
      "Introduced release review and usage monitoring",
    ],
    implementation: [
      "Reusable semantic model with role-based security",
      "Incremental refresh and aggregation strategy",
      "Accessibility-oriented visual and navigation patterns",
    ],
    lessons: ["Metric ownership matters more than dashboard count", "Usage data should guide consolidation"],
    next: ["Introduce deployment pipelines", "Add automated semantic model checks"],
    accent: "rose",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
