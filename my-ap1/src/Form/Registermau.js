// import React, { useState } from 'react';

// const sexOptions = [
//     {
//         id: '',
//         name: 'Vui lòng chọn',
//     },
//     {
//         id: 1,
//         name: 'Male',
//     },
//     {
//         id: 2,
//         name: 'Female',
//     },
// ];

// function Registermau() {
//     const [formData, setFormData] = useState({
//         email: '',
//         pass: '',
//         avatar: null,
//         sex: '',
//     });
//     const [errors, setErrors] = useState({});

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleFile = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             if (!file.type.startsWith('image/')) {
//                 setErrors({ ...errors, avatar: 'Vui lòng chọn một tệp hình ảnh' });
//             } else if (file.size > 1024 * 1024) {
//                 setErrors({ ...errors, avatar: 'Kích thước tệp quá lớn (tối đa 1MB)' });
//             } else {
//                 setFormData({ ...formData, avatar: file });
//             }
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newErrors = {};

//         // Validate email format
//         const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/1;
//         if (!formData.email.match(emailRegex)) {
//             newErrors.email = 'Email không hợp lệ';
//         }

//         if (!formData.sex) {
//             newErrors.sex = 'Vui lòng chọn giới tính';
//         }
//         // if(email && pass){
//         //     email=JSON.parse(email)
//         //     pass=JSON.parse(pass)
            
            
            
//         // }
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);

//         } else {
//             // Thành công, lưu thông tin vào localStorage
//             localStorage.setItem('email', formData.email);
//             localStorage.setItem('pass', formData.pass);
//             console.log('Đăng ký thành công!');
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                     />
//                     {errors.email && <p>{errors.email}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="pass">Password:</label>
//                     <input
//                         type="password"
//                         id="pass"
//                         name="pass"
//                         value={formData.pass}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="avatar">Avatar:</label>
//                     <input type="file" id="avatar" name="avatar" onChange={handleFile} />
//                     {errors.avatar && <p>{errors.avatar}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="sex">Sex:</label>
//                     <select
//                         id="sex"
//                         name="sex"
//                         value={formData.sex}
//                         onChange={handleInputChange}
//                     >
//                         {sexOptions.map((option) => (
//                             <option key={option.id} value={option.id}>
//                                 {option.name}
//                             </option>
//                         ))}
//                     </select>
//                     {errors.sex && <p>{errors.sex}</p>}
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// }

// export default Registermau;
