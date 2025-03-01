import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './project.jsx';
import Resume from './resume.jsx';

const AdminConfig = () => {
    return (
        <div>
            <Project />
            <Resume />
        </div>
    )
}

export default AdminConfig;