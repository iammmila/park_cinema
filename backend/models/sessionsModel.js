const mongoose = require("mongoose")

const { Schema } = mongoose

const sessionsScheme = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        startTime: {
            type: Date,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        hall_id: {
            type: Number,
            required: true
        },
        hall: [
            {
                id: {
                    type: Number,
                    required: true
                },
                hallName: {
                    type: String,
                    required: true
                },
                numberOfRow: {
                    type: Number,
                    required: true
                },
                numberOfColumn: {
                    type: Number,
                    required: true
                },
                about: {
                    type: String,
                    required: true
                },
                cinemaId: {
                    type: Number,
                    required: true
                },
                cinema: [
                    {
                        id: {
                            type: Number,
                            required: true
                        },
                        name: {
                            type: String,
                            required: true
                        },
                        address: {
                            type: String,
                            required: true
                        },
                        phone: {
                            type: Number,
                            required: true
                        },
                        email: {
                            type: String,
                            required: true
                        }
                    }
                ]
            }
        ],
        film_id: {
            type: Number,
            required: true
        },
        film: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                ageLimit: {
                    type: Number,
                    required: true
                },
                durationMinute: {
                    type: Number,
                    required: true
                },
                country: {
                    type: String,
                    required: true
                },
                director: {
                    type: String,
                    required: true
                },
                actors: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                },
                trailer: {
                    type: String,
                    required: true
                },
                poster: {
                    type: String,
                    required: true
                },
            }
        ],
        format_id: {
            type: Number,
            required: true
        },
        format: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    required: true
                }
            }
        ],
        language_id: {
            type: Number,
            required: true
        },
        language: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                }
            }
        ],
        subtitle_id: {
            type: Number,
            required: true
        },
        subtitle: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    { timestamps: true }
)

const Sessions = mongoose.model("sessions", sessionsScheme)
module.exports = (Sessions)