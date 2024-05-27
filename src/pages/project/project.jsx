import React, { useState } from 'react';
import './project.css'
const projects = [
    { id: 1, name: 'Project Name', img: 'https://demo.htmlcodex.com/pro/builderz/img/portfolio-6.jpg', status: 'COMPLETE', },
    { id: 2, name: 'Project Name', img: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/portfolio-2.jpg', status: 'RUNNING'},
    { id: 3, name: 'Project Name', img: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/portfolio-3.jpg', status: 'UPCOMING' },
    { id: 4, name: 'Project Name', img: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/portfolio-4.jpg', status: 'COMPLETE' },
    { id: 5, name: 'Project Name', img: 'https://demo.htmlcodex.com/969/construction-company-website-template/img/portfolio-5.jpg', status: 'RUNNING' },
    { id: 6, name: 'Project Name', img: 'https://demo.htmlcodex.com/pro/builderz/img/portfolio-1.jpg', status: 'UPCOMING' },
];

const Project = () => {
    const [filter, setFilter] = useState('ALL');

    const filter1 = projects.filter(project => {
        if (filter === 'ALL') return true;
        return project.status === filter;
    });


    return (<>
        <div className='menu'>
            <h2 className='tit'>Our Projects</h2>
            <h3 className='sub'> <span>Home</span> / <span>Our Projects</span> </h3>
        </div>
        <div className="project1">

            <h2 className="tit1">Our Projects</h2>
            <h3 className="sub1">Visit Our Projects</h3>
            <div className="filters">
                <button className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`} onClick={() => setFilter('ALL')}>ALL</button>
                <button className={`filter-btn ${filter === 'COMPLETE' ? 'active' : ''}`} onClick={() => setFilter('COMPLETE')}>COMPLETE</button>
                <button className={`filter-btn ${filter === 'RUNNING' ? 'active' : ''}`} onClick={() => setFilter('RUNNING')}>RUNNING</button>
                <button className={`filter-btn ${filter === 'UPCOMING' ? 'active' : ''}`} onClick={() => setFilter('UPCOMING')}>UPCOMING</button>
            </div>
            <div className="projects">
                {filter1.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="image-container">
                            <img src={project.img} alt={project.name} />
                            <div className="ove">
                                <div className="description">Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non.
                                    Aliqu metus tortor, auctor id gravi condime, viverra quis sem.</div>
                            </div>
                        </div>
                        <div className="info">
                            <p>{project.name}</p>
                            <div className="plus">+</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="load" >LOAD MORE</button>
        </div></>
    );
};

export default Project;
