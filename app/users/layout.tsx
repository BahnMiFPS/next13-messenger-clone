import Sidebar from "../components/sidebar/Sidebar"

async function UsersLayout({ children }: { children: React.ReactNode }) {
  console.log("layout")
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  )
}

export default UsersLayout
