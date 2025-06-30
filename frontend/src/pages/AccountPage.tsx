import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { UserCircle } from 'lucide-react';
import classNames from 'classnames';
import { useUserProfile } from '@/components/UserProfileContext';
import { useNavigate } from 'react-router-dom';

const allSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'C++', 'CSS', 'MongoDB', 'Java'];

const AccountPage = () => {
  const { profile, loading, updateUserProfile } = useUserProfile();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    age: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    skills: [] as string[],
    profilePic: '',
    schooling: {
      tenthSchool: '',
      tenthSchoolType: '',
      tenthMarks: '',
      tenthYear: '',
      twelfthSchool: '',
      twelfthSchoolType: '',
      twelfthMarks: '',
      twelfthYear: '',
      college: '',
      currentCourse: '',
      specialization: '',
      currentYear: '',
      cgpa: '',
      currentStatus: '',
    }
  });

  const [activeSection, setActiveSection] = useState('Personal Details');
  const [profilePicFile, setProfilePicFile] = useState<File | null>(null);
  const [newSkill, setNewSkill] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (profile) {
      setFormValues((prev) => ({
        ...prev,
        ...profile,
        schooling: {
          ...prev.schooling,
          ...profile.schooling
        }
      }));
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('schooling.')) {
      const key = name.split('.')[1];
      setFormValues((prev) => ({
        ...prev,
        schooling: {
          ...prev.schooling,
          [key]: value
        }
      }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicFile(e.target.files[0]);
    }
  };

  const handleSkillAdd = (skill: string) => {
    if (!formValues.skills.includes(skill)) {
      setFormValues({ ...formValues, skills: [...formValues.skills, skill] });
    }
    setNewSkill('');
    setFilteredSuggestions([]);
  };

  const handleSkillRemove = (skill: string) => {
    setFormValues({ ...formValues, skills: formValues.skills.filter((s) => s !== skill) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedData = new FormData();

      if (profilePicFile) {
        updatedData.append('profilePic', profilePicFile);
      }

      Object.entries(formValues).forEach(([key, value]) => {
        if (key === 'schooling') {
          Object.entries(value as Record<string, string>).forEach(([subKey, subValue]) => {
            updatedData.append(`schooling.${subKey}`, subValue);
          });
        } else if (key === 'skills') {
          (value as string[]).forEach(skill => updatedData.append('skills', skill));
        } else {
          updatedData.append(key, value as string);
        }
      });

      await updateUserProfile(updatedData);
      setStatus('Profile updated successfully.');
    } catch (error) {
      console.error('Profile update failed', error);
      setStatus('Failed to update profile.');
    }
  };

  if (loading) return <div className="text-center text-black mt-10">Loading...</div>;

  const sections = ['Personal Details', 'Address', 'Educational Background', 'Skills'];

  return (
    <div className="min-h-screen bg-[#EBEDDF] text-white flex py-20 px-4">
      {/* Sidebar */}
      <div className="w-1/3 bg-[#e3e0f2] text-black p-6 rounded-lg space-y-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={classNames("w-full py-2 px-4 rounded-lg text-left hover:bg-slate-300 hover:text-black bg-zinc-800 text-white", {
              'bg-gray-400': activeSection === section
            })}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="text-center flex-1 bg-[#e3e0f2] text-black p-8 rounded-lg ml-6 space-y-8" encType="multipart/form-data">
        <h2 className="text-3xl font-bold mb-6 text-center">My Account</h2>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div
            className="w-32 h-32 rounded-full border-4 border-[#e3e0f2] overflow-hidden mb-4 cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}>
            {profilePicFile ? (
              <img src={URL.createObjectURL(profilePicFile)} alt="Profile" className="w-full h-full object-cover" />
            ) : formValues.profilePic ? (
              <img src={`http://localhost:5000/${formValues.profilePic}`} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <UserCircle className="w-full h-full text-gray-400" />
            )}
          </div>

          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {profilePicFile && (
            <Button
              type="button"
              onClick={() => setProfilePicFile(null)}
              className="bg-red-600 text-white hover:bg-red-700 mt-2"
            >
              Remove Image
            </Button>
          )}
        </div>

        {/* Sections */}
        {activeSection === 'Personal Details' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formValues.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="email" name="email" placeholder="Email" value={formValues.email} readOnly className="w-full px-4 py-3 border rounded-lg bg-gray-100" />
            <input type="text" name="phone" placeholder="Phone Number" value={formValues.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="age" placeholder="Age" value={formValues.age} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="date" name="dob" placeholder='DOB ' value={formValues.dob} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <select name="gender" value={formValues.gender} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        {activeSection === 'Address' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="address1" placeholder="Address Line 1" value={formValues.address1} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="address2" placeholder="Address Line 2" value={formValues.address2} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="city" placeholder="City" value={formValues.city} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="state" placeholder="State" value={formValues.state} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="country" placeholder="Country" value={formValues.country} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
            <input type="text" name="zip" placeholder="ZIP/Postal Code" value={formValues.zip} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
          </div>
        )}

       {activeSection === 'Educational Background' && (
            <div className="space-y-4">

            {/* 10th Details */}
    
            <h3 className="text-xl font-semibold">10th Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="schooling.tenthSchool" placeholder="10th School Name" value={formValues.schooling?.tenthSchool ? formValues.schooling.tenthSchool.toString() : "" } onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type='text' name ='schooling.tenthSchoolType' placeholder='Govt/Private' value={formValues.schooling?.tenthSchoolType ? formValues.schooling.tenthSchoolType.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg"  />
                <input type="number" name="schooling.tenthMarks" step="0.01" min="0" max="100" placeholder="10th Percentage" value={formValues.schooling?.tenthMarks ? formValues.schooling.tenthMarks.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <select name="schooling.tenthYear"
                value={formValues.schooling?.tenthYear ? formValues.schooling.tenthYear.toString() : ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select 10th Passing Year</option>
                    {Array.from({ length: 30 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* 12th Details */}
            <h3 className="text-xl font-semibold mt-6">12th Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="schooling.twelfthSchool" placeholder="12th School Name" value={formValues.schooling?.twelfthSchool ? formValues.schooling.twelfthSchool.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <input type='text' name ='schooling.twelfthSchoolType' placeholder='Govt/Private' value={formValues.schooling?.twelfthSchoolType ? formValues.schooling.twelfthSchoolType.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg"  />
                <input type="number" name="schooling.twelfthMarks" placeholder="12th Percentage" step="0.01" min="0" max="100" value={formValues.schooling?.twelfthMarks ? formValues.schooling.twelfthMarks.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <select
                name="schooling.twelfthYear"
                value={formValues.schooling?.twelfthYear ? formValues.schooling.twelfthYear.toString() : ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select 12th Passing Year</option>
                    {Array.from({ length: 30 }, (_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        );
                    })}
                </select>
            </div>

            {/* Current Education Details */}
            <h3 className="text-xl font-semibold mt-6">Current Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="schooling.college" placeholder="College Name" value={formValues.schooling?.college ? formValues.schooling.college.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <select className='w-full px-4 py-3 border rounded-lg'  name="schooling.currentCourse"
                value={formValues.schooling?.currentCourse ? formValues.schooling.currentCourse.toString() : ""}
                onChange={handleChange}>
                    <option>Select Course</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.Com">B.Com</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="M.Com">M.Com</option>
                    <option value="PhD">PhD</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certification">Certification</option>
                    <option value="Vocational">Vocational</option>
                    <option value="Online Course">Online Course</option>
                    <option value="Distance Learning">Distance Learning</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Apprenticeship">Apprenticeship</option>
                    <option value="Fellowship">Fellowship</option>
                    <option value="Other">Other</option>
                </select>

                <input type='text' name="schooling.specialization" placeholder='specialization' value={formValues.schooling?.specialization ? formValues.schooling.specialization.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />

                <select
                name="schooling.currentYear"
                value={formValues.schooling?.currentYear ? formValues.schooling.currentYear.toString() : ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select Current Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="5">5th Year</option>
                </select>
                <input type="number" name="schooling.cgpa" placeholder="CGPA of Last Year" step="0.01" min="0" max="10" value={formValues.schooling?.cgpa ? formValues.schooling.cgpa.toString() : ""} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                <select
                name="schooling.currentStatus"
                value={formValues.schooling?.currentStatus ? formValues.schooling?.currentStatus.toString() : ""}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg">
                    <option value="">Select your status</option>
                        <option value="1">Pursuing</option>
                        <option value="2">Completed</option>
                </select>
                </div>
            </div>
        )}

        {activeSection === 'Skills' && (
            <div className="space-y-4">
                {/* Input to add skills */}
                <div className="flex items-center space-x-2">
                    <input
                    type="text"
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => {
                    setNewSkill(e.target.value);
                    setFilteredSuggestions(
                    allSkills.filter(skill => skill.toLowerCase().includes(e.target.value.toLowerCase()))
                        );
                    }}
                    className="flex-1 px-4 py-3 border rounded-lg"
                    />
                    <Button
                    type="button"
                    onClick={() => newSkill && handleSkillAdd(newSkill)}
                    className="bg-[#b6b09f] text-black">
                        Add
                    </Button>
                </div>

                {/* Suggestions */}
                {filteredSuggestions.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {filteredSuggestions.map((suggestion, idx) => (
                    <span
                    key={idx}
                    onClick={() => handleSkillAdd(suggestion)}
                    className="cursor-pointer bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                    {suggestion}
                    </span>
                    ))}
                </div>
            )}

            {/* Display added skills */}
            <div className="flex flex-wrap gap-2">
                {formValues.skills?.map((skill, index) => (
                    <div key={index} className="flex items-center bg-[#b6b09f] text-black px-3 py-1 rounded-full">
                    {skill}
                    <button
                    type="button"
                    onClick={() => handleSkillRemove(String(skill))}
                    className="ml-2 text-red-600 hover:text-red-800"
                    >
                        &times;
                    </button>
                </div>
                ))}
            </div>
        </div>
        )}
        {/* Submit Button */}
        <Button type="submit" className="w-3/4rem bg-zinc-800 text-white hover:bg-gray-400 hover:text-black">
          Update Profile
        </Button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default AccountPage;
