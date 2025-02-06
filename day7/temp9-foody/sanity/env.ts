export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skNeGHZbe0w1L6luq9iWDW8dnL64M1Lrbx5utBBIOJoVYDHtsgiInAJCOKJZVRM2jhDe3wJz8t4bP8RSoU4d8ET4MkOq5aor8XuJCJ8aiYxSwqUIGy7vj3r4zYd1K41dpJihK5ORaREmXZpuRH3Shzby7mXKQ1TvWL1LwzlA0ReM1b5PnusU",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
