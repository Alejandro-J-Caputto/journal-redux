export const fileUpload = async (file:any) => {
  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dlm1qwk4g/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    });
    if(resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
}