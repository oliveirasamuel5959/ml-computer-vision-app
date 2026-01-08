import { Sidebar } from "../components/Sidebar";

export function HomePage() {
  return (
    <>
      <title>Home</title>
      <div>
        <Sidebar>
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <p className="text-blue-600">Home Page</p>
          </div>
        </Sidebar>
      </div>
    </>
  );
}