import { useState } from "react";

function UploadImages() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleFileUpload = async () => {
    const formData = new FormData();
    console.log(selectedFile);
    formData.append("file", selectedFile);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/clientes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Archivo subido con éxito");
      if (response.data && response.data.file);
    } catch (error) {
      console.error("Error al subir el archivo", error);
    }
  };
  return (
    <div className="styleUploadImage">
      <h4>Subir Archivos</h4>
      <input type="file" className="inputArchivo" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Subir Archivo</button>
      {file && (
        <div>
          <h5>Imagen cargada</h5>
          <img src={file} />
        </div>
      )}
    </div>
  );
}
export default UploadImages;
