import React from "react";
import "../styles/Edit.css"
const Edit = () => {
	return (
		<>
			<div className="content-wrapper">
				{/* content */}
				<div>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>AdminLTE 3 | Project Edit</title>
					{/* Google Font: Source Sans Pro */}
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
					{/* Font Awesome */}
					<link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
					{/* Theme style */}
					<link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
					{/* Site wrapper */}
					<div className="wrapper">

						{/* Content Wrapper. Contains page content */}
						<div className="content-wrapper" id="conwap">
							{/* Content Header (Page header) */}
							<section className="content-header">
								<div className="container-fluid">
									<div className="row mb-2">
										<div className="col-sm-6">
											<h1>Edit Produk</h1>
										</div>
										<div className="col-sm-6">
											<ol className="breadcrumb float-sm-right">
												<li className="breadcrumb-item"><a href="#">Home</a></li>
												<li className="breadcrumb-item active">Project Edit</li>
											</ol>
										</div>
									</div>
								</div>{/* /.container-fluid */}
							</section>
							{/* Main content */}
							<section className="content">
								<div className="row">
									<div className="col-md-6">
										<div className="card card-primary">
											<div className="card-header">
												<h3 className="card-title">General</h3>
												<div className="card-tools">
													<button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
														<i className="fas fa-minus" />
													</button>
												</div>
											</div>
											<div className="card-body">
												<div className="form-group">
													<label htmlFor="inputName">Judul Produk</label>
													<input type="text" id="inputName" className="form-control" />
												</div>
												<div className="form-group">
													<label htmlFor="inputDescription">Deskripsi Produk</label>
													<textarea id="inputDescription" className="form-control" rows={4} defaultValue={""} />
												</div>
												<div className="form-group" id="koba">
													<label htmlFor="inputStatus">Kondisi Barang</label>
													<select id="inputStatus" className="form-control custom-select">
														<option selected disabled>Pilih Salah Satu</option>
														<option>Baru</option>
														<option>Bekas</option>
													</select>
												</div>
												<div className="form-group" id="harju">
													<div className="harpro">
														<label htmlFor="inputClientCompany">Harga Produk</label>
														<input type="text" id="inputClientCompany" className="form-control" />
													</div>
													<div className="justo">
														<label htmlFor="inputStatus">Jumlah Stok</label>
														<select id="inputStatus" className="form-control custom-select">
															<option selected disabled></option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
														</select>
													</div>
												</div>
												<div className="form-group" id="meka">
													<div className="merk">
														<label htmlFor="inputProjectLeader">Merek</label>
														<input type="text" id="inputProjectLeader" className="form-control" />
													</div>
													<div className="katgo">
														<label htmlFor="inputProjectLeader">Kategori</label>
														<input type="text" id="inputProjectLeader" className="form-control" />
													</div>
												</div>
											</div>
											{/* /.card-body */}
										</div>
										{/* /.card */}
									</div>
									<div className="col-md-6">
										<div className="card card-secondary">
											<div className="card-header">
												<h3 className="card-title">Images</h3>
												<div className="card-tools">
													<button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
														<i className="fas fa-minus" />
													</button>
												</div>
											</div>
											<div className="card-body" id="img">
												<div className="img">
													<img src="../../public/dist/img/image.jpg" className="inimg" />
													<p>Add Images</p>
												</div>
											</div>
											{/* /.card-body */}
										</div>
										{/* /.card */}
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="double-button">
											<button type="button" defaultValue="Delete" id="edit" class="btn btn-success">Edit</button>
											<button type="button" defaultValue="Delete" id="delete" class="btn btn-success">Delete</button>
										</div>
									</div>
								</div>
							</section>
							{/* /.content */}
						</div>
						{/* /.content-wrapper */}

						{/* Control Sidebar */}
						<aside className="control-sidebar control-sidebar-dark">
							{/* Control sidebar content goes here */}
						</aside>
						{/* /.control-sidebar */}
					</div>
					{/* ./wrapper */}
					{/* jQuery */}
					{/* Bootstrap 4 */}
					{/* AdminLTE App */}
					{/* AdminLTE for demo purposes */}
				</div>


			</div >
		</>
	);
};

export default Edit;
