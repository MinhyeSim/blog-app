import { useState } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import LoginPage from "pages/login";
import PostList from "pages/post";
import PostDetail from "pages/post/detail";
import PostEdit from "pages/post/edit";
import PostNew from "pages/post/new";
import ProfilePage from "pages/profile";
import SignupPage from "pages/signup";

interface RouterProps {
    isAuthenticated : boolean;
}


export default function Router({ isAuthenticated }: RouterProps) {
    return (
        <>
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Home />}/>
                        <Route path="/posts" element={<PostList/>}/>
                        <Route path="/posts/:id" element={<PostDetail />}/>
                        <Route path="/posts/new" element={<PostNew />}/>
                        <Route path="/posts/edit/:id" element={<PostEdit />}/>
                        <Route path="/profile" element={<ProfilePage />}/>
                        <Route path="*" element={<Navigate replace to="/"/>}/>
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="*" element={<LoginPage/>} />
                    </>
                )}
            </Routes>
        </>
    );
}