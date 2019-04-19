const Task = require('mongoose').model('Task')

mongoose.exports = {
    index(req, res){
        Task.find({}, function(err, task){
            if(err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    },
    create(req,res){
        Task.create(req.body, function(err, task){
            if(err){res.json({message: "Error", error: err})}
            else {res.json({msg: "Task created", task: task})}
        })
    },

    destroy(req, res){
        Task.findByIdAndRemove(req.params.id, function(err,task){
            if(err){res.json({message: "Error", error: err})}
            else {res.json({msg : "Task Deleted"})}
        })
    },
    show(req,res){
        Task.findById(req.params.id, function(err, task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    },
    update(req, res){
        Task.findByIdAndUpdate(req.params.id, function(err, task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    }
}