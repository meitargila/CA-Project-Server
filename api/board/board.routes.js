import express from 'express'
import { addBug, getBug, getBugs, removeBug, updateBug } from './board.controller.js'

const router = express.Router()

router.get('/', getBugs)
router.get('/:bugId', getBug)
router.delete('/:bugId', removeBug)
router.post('/', addBug)
router.put('/', updateBug)

export const bugRoutes = router