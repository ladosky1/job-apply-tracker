import { createContext, useContext, useState, useEffect } from "react";

const JobContext = createContext();

export function JobProvider({children}){
    const [jobs, setJobs] = useState(() => {
        const saved = localStorage.getItem("jobs");
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);

    const addJob = (job) => {
        setJobs(prev => [...prev, job]);
    }

    const deleteJob = (id) => {
        setJobs((prev) => prev.filter(job => job.id !== id));
    }

    const updateJob = (id, updates) => {
        setJobs(prev => 
                    prev.map(job => 
                        job.id === id ? {...job, ...updates} : job));
    }

    return(
        <JobContext.Provider value={{ jobs, addJob, deleteJob, updateJob }}>
            {children}
        </JobContext.Provider>
    )
}

export function useJobs(){
    return useContext(JobContext);
}