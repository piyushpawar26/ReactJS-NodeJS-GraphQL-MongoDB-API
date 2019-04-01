const Asset = require('../models/asset');
const Task = require('../models/task');
const Worker = require('../models/Worker');
const mongoose = require('mongoose');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const AssetType = new GraphQLObjectType({
    name: 'Asset',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: () => ({
        id: { type: GraphQLID },
        workerId: { type: GraphQLID },
        assetId: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

const WorkerType = new GraphQLObjectType({
    name: 'Worker',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        skillset: { type: GraphQLString },
        tasks: {
            type: GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({ WorkerId: parent.id });
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        Worker: {
            type: WorkerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Worker.findById(args.id);
            }
        },
        Assets: {
            type: GraphQLList(AssetType),
            resolve(parent, args) {
                return Asset.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAsset: {
            type: AssetType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let asset = new Asset({
                    name: args.name,
                    description: args.description
                });
                return asset.save();
            }
        },
        addTask: {
            type: TaskType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let task = new Task({
                    title: args.title,
                    description: args.description
                });
                return task.save();
            }
        },
        addWorker: {
            type: WorkerType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                skillset: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let worker = new Worker({
                    name: args.name,
                    skillset: args.skillset
                });
                return worker.save();
            }
        },
        allocateTask: {
            type: TaskType,
            args: {
                assetId: { type: GraphQLNonNull(GraphQLID) },
                taskId: { type: GraphQLNonNull(GraphQLID) },
                workerId: { type: GraphQLNonNull(GraphQLID) },
                timeOfAllocation: { type: GraphQLNonNull(GraphQLString) },
                taskToBePerformedBy: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                return new Promise((resolve, reject) => {
                    Task.findOneAndUpdate(
                        {"id": args.id},
                        { "$set": {
                            assetId: args.assetId,
                            workerId: args.workerId,
                            timeOfAllocation: args.timeOfAllocation,
                            taskToBePerformedBy: args.taskToBePerformedBy
                        }},
                        {"new": true}
                    ).exec((err, res) => {
                        console.log('test', res)
                        if(err) reject(err)
                        else resolve(res)
                    })
                })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
