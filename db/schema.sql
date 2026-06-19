-- Run this in the Neon SQL Editor after creating your project:
-- https://console.neon.tech → your project → SQL Editor

CREATE TABLE IF NOT EXISTS project_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  plan TEXT NOT NULL CHECK (plan IN ('mvp', 'growth', 'custom', 'not-sure')),
  timeline TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS project_inquiries_created_at_idx
  ON project_inquiries (created_at DESC);
