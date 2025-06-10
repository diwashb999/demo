import type React from "react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="pt-32 bg-gradient-to-br from-blue-50 to-indigo-50">{children}</div>
}
