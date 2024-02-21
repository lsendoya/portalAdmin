export function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-4 w-12 h-12 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
        <p className="text-lg text-blue-800">Cargando...</p>
      </div>
    </div>
  );
}
