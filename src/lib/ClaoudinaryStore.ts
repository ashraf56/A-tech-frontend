export const CloudinaryStore = async (file: string | Blob)=>{
    const formData = new FormData();
    
    formData.append('file', file);

    const my_upload_preset = process.env.NEXT_PUBLIC_Preset_name
    const my_cloude_name = process.env.NEXT_PUBLIC_cloude_name

    formData.append('upload_preset', my_upload_preset as string);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${my_cloude_name}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            return data.secure_url;
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}