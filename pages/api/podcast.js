// pages/api/projects/add.js

import dbConnect from './utils/dbConnect';
import Project from './models/Project';
import Podcast from './models/podcast';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === "POST") {
        try {
            const {projectId,title,description } = req.body;
            const newpodcast = new Podcast({projectId,title,description });

            const savePodcast = await newpodcast.save();

            // Push the new podcast ID into the tasks array
            const project = await Project.findByIdAndUpdate(
                projectId,
                { $push: { podcast: newpodcast._id } }, 
                { new: true }
              );

            res.status(201).json({ message: 'Podcast Added sucessfully', data: savePodcast });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    else if (method === "PUT") {
        try {
            const {projectId,podcastId } = req.body;
            console.log(req.body);

            let data = await Podcast.findByIdAndDelete(podcastId)

            // removing from projects array
            const project= await Project.findById(projectId)
            project.podcast.pull(podcastId); 

            // Save the updated document
            await project.save();

            res.status(201).json({ message: 'Podcast Deleted sucessfully', data});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    else if (method === "PATCH") {
        try {
            const {podcastId,Data} = req.body;
            
            let podcast =await Podcast.findByIdAndUpdate(podcastId,Data)
            
            await podcast.save();
            console.log(podcast)

            res.status(201).json({ message: 'Podcast updated sucessfully'});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    
    else {
        if(req.query.id){
            const podcast= await Podcast.findById(req.query.id)
            res.status(200).json({ data:podcast});
        }
        res.status(400).json({ message: "Make post request to add Podcast" });
    }

}