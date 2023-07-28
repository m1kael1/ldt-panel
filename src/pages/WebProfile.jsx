import Summernote from "../components/Summernote";
import { useState } from "react";
import "../styles/Summernote.css";
import defaultlogo from "../assets/defaultlogo.svg";

const WebProfile = () => {
	const [image, setImage] = useState(defaultlogo);
	const [saveImage, setSaveImage] = useState(null);

	const uploadImage = () => {
		if (!saveImage) {
			alert("Tidak ada gambar yang di upload");
		} else {
			//fetch data
			formData.append("image", saveImage);
			fetch("http://localhost:4000/api/upload", {
				method: "POST",
				body: formData,
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.status === "success") {
						location.reload();
					}
				});
		}
	};

	const handleUploadChange = (e) => {
		console.log(e.target.files[0]);
		let uploaded = e.target.files[0];
		setImage(URL.createObjectURL(uploaded));
		setSaveImage(uploaded);
	};

	return (
		<>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0">Web Profile</h1>
							</div>
						</div>
					</div>
				</div>
				{/* Paste Content */}
				<div class="col">
					{/* upload image */}
					<div className="card-body ">
						<div className=" mb-6 w-[221px] object-cover  items-center ">
							{image && (
								<img
									src={image}
									className="object-fill w-[221px] h-[214px] z-50 flex "
									alt="logo"
								/>
							)}
						</div>
						<div className="row mx-auto gap-2">
							<button
								onClick={uploadImage}
								type="submit"
								className="btn btn-primary bg-[#007bff]"
							>
								Save
							</button>
							<button
								type="submit"
								className="btn btn-primary relative overflow-hidden bg-[#007bff]"
							>
								Change Logo
								<input
									accept="image/*"
									type="file"
									onChange={handleUploadChange}
									className="absolute bg-black -left-24 top-0 h-24 opacity-0 cursor-pointer "
								/>
							</button>
						</div>
						<Summernote />
					</div>
				</div>
			</div>
		</>
	);
};

export default WebProfile;
