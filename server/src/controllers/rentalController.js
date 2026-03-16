import asyncHandler from '../utils/asyncHandler.js';
import Rental from '../models/Rental.js';

// @desc    Get all rentals
// @route   GET /api/rentals
// @access  Public
const getRentals = asyncHandler(async (req, res) => {
    const rentals = await Rental.find({ availability: true }).populate('owner', 'name email');
    res.json(rentals);
});

// @desc    Get single rental by ID
// @route   GET /api/rentals/:id
// @access  Public
const getRentalById = asyncHandler(async (req, res) => {
    const rental = await Rental.findById(req.params.id).populate('owner', 'name email');

    if (rental) {
        res.json(rental);
    } else {
        res.status(404);
        throw new Error('Rental not found');
    }
});

// @desc    Create a rental
// @route   POST /api/rentals
// @access  Private
const createRental = asyncHandler(async (req, res) => {
    const { title, description, category, pricePerDay, location } = req.body;

    const rental = new Rental({
        title,
        description,
        category,
        pricePerDay,
        location,
        owner: req.user._id,
    });

    const createdRental = await rental.save();
    res.status(201).json(createdRental);
});

export { getRentals, getRentalById, createRental };
