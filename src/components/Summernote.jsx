import React from "react";

const Summernote = () => {
	return (
		<div className="card card-primary mt-10">
			<div className="card-header">
				<h3 className="card-title">Tentang Kami</h3>
			</div>
			{/* /.card-header */}
			{/* form start */}
			<form>
				<div className="card-body">
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Deskripsi</label>
						<textarea
							type="email"
							className="form-control list-[auto]"
							id="summernote"
							placeholder="Enter email"
							name="editor"
						/>
					</div>
				</div>
				{/* /.card-body */}
				<div className="card-footer">
					<button type="submit" className="btn btn-primary bg-[#007bff]">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Summernote;
