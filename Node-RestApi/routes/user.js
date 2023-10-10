import express from 'express';
//const express = require("express");
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';
/*const getUsers =require("../controllers/users.js")
const createUser =require("../controllers/users.js")
const getUser =require("../controllers/users.js")
const deleteUser =require("../controllers/users.js")
const updateUser =require("../controllers/users.js")*/

const router = express.Router();

router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;