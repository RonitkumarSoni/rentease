export const products = [
    {
        id: '1',
        title: 'Sony Alpha a7 III Mirrorless Camera',
        description: 'Advanced 24.2MP BSI Full-frame Image Sensor. Perfect for professional photography and 4K video.',
        category: 'Cameras',
        price: 1500,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 124,
        location: 'Mumbai, Maharashtra',
        owner: 'Rahul Sharma',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Full-frame Sensor', '4K Video', '5-axis Stabilization'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aditya K.',
                rating: 5,
                comment: 'Amazing camera! Used it for a wedding shoot and the results were stunning. The low light performance is top-notch.',
                date: '2 months ago',
                images: [
                    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            },
            {
                id: 2,
                user: 'Sana M.',
                rating: 4,
                comment: 'Great condition, very helpful owner. The dynamic range is incredible.',
                date: '1 month ago',
                images: [
                    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1495121553079-4c61bbbc19ef?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '2',
        title: 'MacBook Pro M2 Max 14"',
        description: 'Apple M2 Max chip with 12‑core CPU, 30‑core GPU, and 16‑core Neural Engine.',
        category: 'Laptops',
        price: 2500,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 86,
        location: 'Bangalore, Karnataka',
        owner: 'Priya Verma',
        ownerRating: 4.8,
        availability: 'Reserved',
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1611186871348-71ce4ee473fa?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1525547718571-03903c323b7d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['M2 Max Chip', '32GB RAM', 'Liquid Retina XDR'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Rohan D.',
                rating: 5,
                comment: 'Absolute beast of a machine. Fast compile times for my projects. Highly recommend!',
                date: '15 days ago',
                images: [
                    'https://images.unsplash.com/photo-1537498425277-c23e922af809?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1611186871348-71ce4ee473fa?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '3',
        title: 'PlayStation 5 Console',
        description: 'Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion.',
        category: 'Gaming',
        price: 800,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 342,
        location: 'Delhi, NCR',
        owner: 'Amit Gupta',
        ownerRating: 4.5,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['4K Gaming', 'Ray Tracing', 'Haptic Feedback'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Karan P.',
                rating: 5,
                comment: 'The haptic feedback on the DualSense controller is amazing. Rented it for the weekend and had a blast!',
                date: '3 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1622239453960-cf39a2dada80?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Gurgaon'
            }
        ]
    },
    {
        id: '4',
        title: 'JBL PartyBox 310',
        description: 'Huge sound, dazzling lights and unbelievable power set this speaker apart from the crowd.',
        category: 'Speakers',
        price: 1200,
        priceUnit: 'day',
        rating: 4.6,
        reviewsCount: 56,
        location: 'Pune, Maharashtra',
        owner: 'Sandeep Rai',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['240W Output', 'IPX4 Splashproof', '18hr Battery'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Megha S.',
                rating: 5,
                comment: 'Rented this for a house party. The sound quality and lights were the highlight of the evening!',
                date: '1 month ago',
                images: [
                    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '5',
        title: 'Epson Home Cinema Projector',
        description: 'Bring the big screen home with this 4K PRO-UHD1 projector.',
        category: 'Projectors',
        price: 1000,
        priceUnit: 'day',
        rating: 4.5,
        reviewsCount: 28,
        location: 'Hyderabad, Telangana',
        owner: 'Kiran Reddy',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://avstore.in/cdn/shop/products/white5_b345c3be-6c15-40d2-865b-1812b56a0cd2.png?v=1628789080&width=1200',
            'https://images.unsplash.com/photo-1535016120720-40c646bebbbc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1517608488858-90ecaa333f0c?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['4K UHD', '2800 Lumens', 'Dual HDMI'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Nitin J.',
                rating: 4,
                comment: 'Great for movie nights. Very bright and contrast is good even in moderate light.',
                date: '2 months ago',
                images: [
                    'https://images.unsplash.com/photo-1535016120720-40c646bebbbc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '6',
        title: 'DJI Mavic 3 Pro',
        description: 'Flagship tri-camera system drone. The next era of aerial imaging.',
        category: 'Drones',
        price: 3500,
        priceUnit: 'day',
        rating: 5.0,
        reviewsCount: 15,
        location: 'Chennai, Tamil Nadu',
        owner: 'Arjun Das',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Hasselblad Camera', '43min Flight Time', 'Omni Obstacle Sensing'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Siddharth T.',
                rating: 5,
                comment: 'The Hasselblad camera is mind blowing. Best drone I have ever flown. Perfect for professional cinematography.',
                date: '10 days ago',
                images: [
                    'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chennai'
            }
        ]
    },
    {
        id: '7',
        title: 'Yamaha FG800 Acoustic Guitar',
        description: 'Simple and traditional look that has outstanding quality at an affordable price.',
        category: 'Instruments',
        price: 300,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 42,
        location: 'Mumbai, Maharashtra',
        owner: 'Sumeet Vyas',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Solid Spruce Top', 'Nato/Okume Back & Sides', 'Rosewood Fingerboard'],
        isActive: true,
        reviews: []
    },
    {
        id: '8',
        title: 'Nintendo Switch OLED',
        description: 'Vibrant 7-inch OLED screen, a wide adjustable stand, and a wired LAN port.',
        category: 'Gaming',
        price: 500,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 156,
        location: 'Bangalore, Karnataka',
        owner: 'Sneha Jain',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1210',
            'https://images.unsplash.com/photo-1578303318320-dc7b419d039a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1612036782180-b8529267104e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['OLED Screen', '64GB Storage', 'Enhanced Audio'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aakash V.',
                rating: 5,
                comment: 'The OLED display is so bright. Playing Zelda in handheld mode is a revelation.',
                date: '12 days ago',
                images: [
                    'https://images.unsplash.com/photo-1595166611255-af305bcadbf8?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1578303318320-dc7b419d039a?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '9',
        title: 'Canon EOS R6 Mark II',
        description: 'Full-frame mirrorless camera for enthusiast photographers and multi-media creators.',
        category: 'Cameras',
        price: 2200,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 34,
        location: 'Delhi, NCR',
        owner: 'Vikram Singh',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1495121553079-4c61bbbc19ef?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1526336028061-432070689b6a?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['40fps Burst', '6K RAW', 'Dual Pixel CMOS AF II'],
        isActive: true,
        reviews: []
    },
    {
        id: '10',
        title: 'Razer Blade 15 Gaming Laptop',
        description: 'CNC aluminum unibody with GeForce RTX 40-Series graphics and OLED displays.',
        category: 'Laptops',
        price: 2800,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 22,
        location: 'Pune, Maharashtra',
        owner: 'Ishaan Gupta',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1537498425277-c23e922af809?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['RTX 4070', '240Hz OLED', 'Thunderbolt 4'],
        isActive: true,
        reviews: []
    },
    {
        id: '11',
        title: 'Bose QuietComfort Ultra',
        description: 'World-class noise cancelling, quieter than ever before. Breakthrough spatialized audio.',
        category: 'Speakers',
        price: 600,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 89,
        location: 'Mumbai, Maharashtra',
        owner: 'Tanvi Shah',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1583394838336-acd97773dbf9?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Spatial Audio', 'CustomTune', '24hr Battery'],
        isActive: true,
        reviews: []
    },
    {
        id: '12',
        title: 'iPad Pro 12.9" M2',
        description: 'Liquid Retina XDR display. M2 chip. Insanely fast wireless. Apple Pencil hover.',
        category: 'Tablets',
        price: 1200,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 45,
        location: 'Bangalore, Karnataka',
        owner: 'Aditi Nair',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Mini-LED Display', 'Center Stage', 'WiFi 6E'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Kunal V.',
                rating: 5,
                comment: 'The display is just gorgeous. Using it for digital art and the responsiveness is top-tier.',
                date: '2 months ago',
                images: [
                    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '13',
        title: 'Bosch Professional Cordless Drill',
        description: 'Compact and powerful 18V cordless drill/driver. Perfect for DIY home projects.',
        category: 'Tools',
        price: 250,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 52,
        location: 'Hyderabad, Telangana',
        owner: 'Vikram Rao',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1540103390171-184763e03910?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['18V Battery', 'Brushless Motor', 'High Torque'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Animesh S.',
                rating: 5,
                comment: 'Very handy tool! Built my entire bookshelf with this. Battery lasts a long time.',
                date: '10 days ago',
                images: [
                    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '14',
        title: 'Samsung 65" QLED 4K TV',
        description: 'Breathtaking 4K resolution with Quantum HDR. The ultimate home cinema experience.',
        category: 'Appliances',
        price: 1800,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 28,
        location: 'Mumbai, Maharashtra',
        owner: 'Arnav Singh',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1593784991095-a205029471b6?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1461151304267-38535e770e70?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1552282373-c62955f36e8b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Quantum HDR', 'Dolby Atmos', 'Dynamic Crystal Color'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Ishita P.',
                rating: 5,
                comment: 'Rented for a movie marathon. The colors are so vibrant! Installation was very smooth.',
                date: '2 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1593784991095-a205029471b6?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1461151304267-38535e770e70?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '15',
        title: 'Bowflex SelectTech Adjustable Dumbbells',
        description: 'Space-saving adjustable dumbbells that replace 15 sets of weights.',
        category: 'Fitness',
        price: 400,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 120,
        location: 'Bangalore, Karnataka',
        owner: 'Siddharth M.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1638536532646-e6052b6d762d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['5-52.5 lbs Range', 'Compact Design', 'Easy Weight Selection'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Rajat K.',
                rating: 5,
                comment: 'Perfect for my apartment gym. Saving so much space. The adjustment mechanism is smooth.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1638536532646-e6052b6d762d?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '16',
        title: 'Quechua 4-Person Camping Tent',
        description: 'Fresh & Black technology for a cool and dark nights sleep. Easy pitching.',
        category: 'Camping',
        price: 350,
        priceUnit: 'day',
        rating: 4.6,
        reviewsCount: 84,
        location: 'Pune, Maharashtra',
        owner: 'Sameer K.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1525811902-f23426213f0e?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Blackout Tech', 'Waterproof', 'Automatic Pitching'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aisha F.',
                rating: 4,
                comment: 'Stayed cool even in the afternoon sun. Very spacious and easy to pack away.',
                date: '3 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '17',
        title: 'Rockrider ST100 Mountain Bike',
        description: 'First mountain bike with effective suspension for forest trails.',
        category: 'Cycles',
        price: 200,
        priceUnit: 'day',
        rating: 4.5,
        reviewsCount: 215,
        location: 'Chandigarh, Punjab',
        owner: 'Gurdeep S.',
        ownerRating: 4.5,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1532298229144-0ee050c99dfe?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1575585254154-76ebf3fd0e99?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1501530767125-c396861b32a8?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Aluminum Frame', '21 Gears', 'Front Suspension'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Sunny B.',
                rating: 5,
                comment: 'Took it to the Sukhna lake trails. Had a fantastic ride. Bike was in top condition.',
                date: '5 days ago',
                images: [
                    'https://images.unsplash.com/photo-1532298229144-0ee050c99dfe?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1575585254154-76ebf3fd0e99?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chandigarh'
            }
        ]
    },
    {
        id: '18',
        title: 'Apple Watch Ultra 2',
        description: 'The most rugged and capable Apple Watch. Designed for endurance, exploration, and adventure.',
        category: 'Wearables',
        price: 700,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 38,
        location: 'Delhi, NCR',
        owner: 'Manish T.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1617042375876-a13e3cee739a?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Titanium Case', '36hr Battery', 'Depth Gauge'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Harshit R.',
                rating: 5,
                comment: 'Great for my hiking trip. The bright screen is amazing outdoors. Battery life is solid.',
                date: '12 days ago',
                images: [
                    'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            }
        ]
    },
    {
        id: '19',
        title: 'GoPro HERO 12 Black',
        description: 'New HDR video, 5.3K video resolution, and industry-leading HyperSmooth 6.0 stabilization.',
        category: 'Cameras',
        price: 800,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 92,
        location: 'Goa',
        owner: 'Kevin D.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1565349195357-741607fecacc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['5.3K60 Video', 'HDR Support', 'Rugged + Waterproof'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Nisha V.',
                rating: 5,
                comment: 'Perfect for filming my surf sessions. The stabilization is unreal! Condition was excellent.',
                date: '8 days ago',
                images: [
                    'https://images.unsplash.com/photo-1565349195357-741607fecacc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Goa'
            }
        ]
    },
    {
        id: '20',
        title: 'Dell XPS 15 Laptop',
        description: 'Immersive 15.6" 3.5K OLED touch display. Experience extreme performance.',
        category: 'Laptops',
        price: 2200,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 45,
        location: 'Hyderabad, Telangana',
        owner: 'Sravan G.',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1537498425277-c23e922af809?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['i9 Processor', '32GB RAM', 'RTX 4050'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Pranav T.',
                rating: 5,
                comment: 'Used it for heavy video editing. Handled 4K footage without any lag. The screen is perfect.',
                date: '20 days ago',
                images: [
                    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '21',
        title: 'Marshall Stanmore III Speaker',
        description: 'Iconic Marshall design with high-quality sound. Ideal for medium to large rooms.',
        category: 'Speakers',
        price: 500,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 67,
        location: 'Bangalore, Karnataka',
        owner: 'Leo J.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Bluetooth 5.2', 'Classic Style', 'Custom Sound'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Zara K.',
                rating: 5,
                comment: 'The sound is so crisp and deep. Perfect for listing sessions. Looks amazing on my shelf too.',
                date: '4 days ago',
                images: [
                    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '22',
        title: 'BenQ Mobiuz 4K Monitor',
        description: '32-inch 4K resolution with 144Hz refresh rate. The ultimate gaming immersion.',
        category: 'Office',
        price: 900,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 15,
        location: 'Chennai, Tamil Nadu',
        owner: 'Deepak R.',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['144Hz Refresh', 'HDMI 2.1', 'HDRi Tech'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Kartik V.',
                rating: 5,
                comment: 'Smooth performance for my PS5. The colors are accurate and eye care features Really work.',
                date: '2 days ago',
                images: [
                    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chennai'
            }
        ]
    },
    {
        id: '23',
        title: 'Segway Ninebot Max G2',
        description: 'Powerful motor and rear-wheel drive. Ride up to 70km on a single charge.',
        category: 'Cycles',
        price: 600,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 42,
        location: 'Mumbai, Maharashtra',
        owner: 'Ronnie M.',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1620241031765-5c10640d99ca?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['70km Range', 'Self-healing Tires', 'Hydraulic Suspension'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aakash P.',
                rating: 5,
                comment: 'Rented for commuting to work for a week. So much faster than taking the bus. Battery is great.',
                date: '6 days ago',
                images: [
                    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '24',
        title: 'Insta360 X3 Action Camera',
        description: 'Magic of 360-degree capture. Impossible shots made easy.',
        category: 'Cameras',
        price: 750,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 31,
        location: 'Manali, H.P.',
        owner: 'Samsher G.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1565349195357-741607fecacc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['5.7K 360 Video', 'Invisible Selfie Stick', 'AI Editing'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Rahul V.',
                rating: 5,
                comment: 'Captured some epic footage on my skiing trip. The reframing features are so easy to use.',
                date: '3 days ago',
                images: [
                    'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1565349195357-741607fecacc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Manali'
            }
        ]
    },
    {
        id: '25',
        title: 'Razer Iskur Gaming Chair',
        description: 'Ergonomic gaming chair with a built-in, fully adjustable lumbar support system.',
        category: 'Gaming',
        price: 450,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 56,
        location: 'Bangalore, Karnataka',
        owner: 'Sumanth K.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Lumbar Support', '4D Armrests', 'Memory Foam'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Rahul D.',
                rating: 5,
                comment: 'Most comfortable chair I have ever sat in. Rented for a hackathon weekend. Saved my back!',
                date: '5 days ago',
                images: [
                    'https://images.unsplash.com/photo-1598550476439-6847785fce6e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '26',
        title: 'Nespresso Vertuo Coffee Machine',
        description: 'Brews a wide range of coffee styles at the touch of a button. Versatile and elegant.',
        category: 'Appliances',
        price: 300,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 22,
        location: 'Mumbai, Maharashtra',
        owner: 'Priya S.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520970014086-2208ec0fd573?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1512568400610-64da2dca885f?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['One-touch Brewing', 'Fast Heat-up', 'Automatic Ejection'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Sara M.',
                rating: 5,
                comment: 'Made my morning so much better. Rented for a house party. Everyone loved the coffee!',
                date: '2 days ago',
                images: [
                    'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1520970014086-2208ec0fd573?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '27',
        title: 'Coleman Gas Camping Stove',
        description: 'Powerful 2-burner stove for outdoor cooking. Reliable and easy to clean.',
        category: 'Camping',
        price: 150,
        priceUnit: 'day',
        rating: 4.6,
        reviewsCount: 38,
        location: 'Pune, Maharashtra',
        owner: 'Amit J.',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1525811902-f23426213f0e?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['2 Burners', 'WindBlock Panels', 'Pressure Control'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Vikram B.',
                rating: 4,
                comment: 'Solid stove. Used it for a weekend trek to Lonavala. Worked perfectly in windy conditions.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '28',
        title: 'Blue Yeti USB Microphone',
        description: 'Professional USB microphone for recording and streaming. Crisp, studio-quality sound.',
        category: 'Speakers',
        price: 250,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 74,
        location: 'Delhi, NCR',
        owner: 'Neha G.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Tri-capsule Array', 'Multiple Patterns', 'Instant Mute'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Arnav K.',
                rating: 5,
                comment: 'Perfect for my podcast recording. The sound quality is amazing for a USB mic. Very easy to setup.',
                date: '4 days ago',
                images: [
                    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            }
        ]
    },
    {
        id: '29',
        title: 'Sony Alpha a7 IV Camera',
        description: 'Full-frame mirrorless camera with 33MP sensor and 4K 60p video recording.',
        category: 'Cameras',
        price: 2500,
        priceUnit: 'day',
        rating: 5.0,
        reviewsCount: 18,
        location: 'Hyderabad, Telangana',
        owner: 'Siddharth R.',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520390138845-fd2d22962470?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['33MP Full-frame', 'Real-time Eye AF', '4K 60p 10-bit'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Ishaan V.',
                rating: 5,
                comment: 'The best mirrorless camera I have used. Rented for a wedding shoot. Dynamic range is insane.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1520390138845-fd2d22962470?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '30',
        title: 'Microsoft Surface Pro 9',
        description: 'The power of a laptop, the flexibility of a tablet. High-performance design for creators.',
        category: 'Laptops',
        price: 1500,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 26,
        location: 'Chennai, Tamil Nadu',
        owner: 'Lokesh T.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Intel Evo Core i7', '120Hz Display', 'Thunderbolt 4'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aarthi S.',
                rating: 5,
                comment: 'Very light and powerful. Rented for a business trip. Battery life was good as well.',
                date: '3 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chennai'
            }
        ]
    },
    {
        id: '31',
        title: 'Yamaha P-45 Digital Piano',
        description: 'Authentic piano sound with weighted keys. Perfect for beginners and intermediate players.',
        category: 'Instruments',
        price: 600,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 42,
        location: 'Bangalore, Karnataka',
        owner: 'Meera N.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1520527053375-afafd0934acc?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1595066117242-aa86603a1fc6?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1571327073757-51d7cd9ad24d?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['88 Weighted Keys', 'Compact Design', 'Built-in Speakers'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Karthik S.',
                rating: 5,
                comment: 'The touch is very close to an acoustic piano. Rented for a month to practice. Highly recommended.',
                date: '2 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1520527053375-afafd0934acc?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1595066117242-aa86603a1fc6?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '32',
        title: 'Philips Air Fryer XL',
        description: 'Healthy frying with Rapid Air technology. Large capacity for the whole family.',
        category: 'Appliances',
        price: 200,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 89,
        location: 'Mumbai, Maharashtra',
        owner: 'Deepak V.',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1502472545825-0ad56f890bb1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1584281722572-870371077678?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1574362848149-11446d3ee2b5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Rapid Air Tech', '6.2L Capacity', 'Touch Interface'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Pooja R.',
                rating: 5,
                comment: 'Perfect for making healthy snacks. Rented for a family reunion. Very easy to use.',
                date: '5 days ago',
                images: [
                    'https://images.unsplash.com/photo-1502472545825-0ad56f890bb1?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1584281722572-870371077678?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1574362848149-11446d3ee2b5?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '33',
        title: 'Garmin Fenix 7 Solar',
        description: 'Rugged multisport GPS watch with solar charging. The ultimate adventure tablet.',
        category: 'Wearables',
        price: 600,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 15,
        location: 'Pune, Maharashtra',
        owner: 'Rohan G.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1617042375876-a13e3cee739a?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Solar Charging', 'Map Support', 'Advanced Sensors'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Aditya P.',
                rating: 5,
                comment: 'Took it for a high-altitude trek. The GPS tracking is very accurate and solar charging works!',
                date: '3 days ago',
                images: [
                    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '34',
        title: 'Ninja Professional Blender',
        description: 'High-performance blender for making smoothies, shakes, and more. Durable design.',
        category: 'Appliances',
        price: 150,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 56,
        location: 'Hyderabad, Telangana',
        owner: 'Sravanthi M.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1585238341267-1cfcb2191054?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['1000W Motor', 'Total Crushing Tech', 'BPA Free'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Divya K.',
                rating: 5,
                comment: 'Makes the smoothest smoothies! Rented for a week for my post-workout shakes.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1585238341267-1cfcb2191054?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '35',
        title: 'Black+Decker Cordless Vacuum',
        description: 'Lightweight cordless vacuum for quick cleanups. Strong suction and long run time.',
        category: 'Appliances',
        price: 250,
        priceUnit: 'day',
        rating: 4.6,
        reviewsCount: 34,
        location: 'Delhi, NCR',
        owner: 'Anjali S.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1527515637462-cff94eecc1ae?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1563131817-36ea8b9409f5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1581615715509-0010905186b1?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Cordless Design', 'HEPA Filtration', 'Easy Empty Bin'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Mona L.',
                rating: 4,
                comment: 'Great for cleaning pet hair. Very handy and light. Rented for a deep clean session.',
                date: '4 days ago',
                images: [
                    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ae?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1563131817-36ea8b9409f5?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            }
        ]
    },
    {
        id: '36',
        title: 'Dyson Airwrap Styler',
        description: 'Styles hair without extreme heat. Dries and styles simultaneously for professional results.',
        category: 'Appliances',
        price: 800,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 120,
        location: 'Mumbai, Maharashtra',
        owner: 'Rekha B.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Coanda Effect', 'Multiple Attachments', 'Intelligent Heat Control'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Ishani J.',
                rating: 5,
                comment: 'Absolutely love this! Rented for my sisters wedding. My hair looked salon-styled.',
                date: '2 days ago',
                images: [
                    'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '37',
        title: 'Bose QuietComfort 45',
        description: 'World-class noise cancelling headphones with amazing sound and deep comfort.',
        category: 'Speakers',
        price: 400,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 95,
        location: 'Bangalore, Karnataka',
        owner: 'Siddharth V.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Acoustic Noise Cancelling', '24hr Battery', 'Aware Mode'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Nikhil R.',
                rating: 5,
                comment: 'The noise cancellation is just magical. Rented for a long flight. Worth every penny.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '38',
        title: 'Sony PS5 Console',
        description: 'Experience lightning-fast loading and immersive gaming with the PlayStation 5.',
        category: 'Gaming',
        price: 1200,
        priceUnit: 'day',
        rating: 5.0,
        reviewsCount: 210,
        location: 'Hyderabad, Telangana',
        owner: 'Pawan K.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1622239437213-39d77f88e63b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Ray Tracing', 'Adaptive Triggers', 'Ultra-high Speed SSD'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Tarun G.',
                rating: 5,
                comment: 'Best weekends ever! Rented with an extra controller for a gaming session with friends.',
                date: '3 days ago',
                images: [
                    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1622239437213-39d77f88e63b?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '39',
        title: 'Thrive Yoga Set',
        description: 'Premium yoga set including a non-slip mat, blocks, and a strap for better stretching.',
        category: 'Fitness',
        price: 100,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 48,
        location: 'Pune, Maharashtra',
        owner: 'Komal S.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Eco-friendly Mat', 'Friction Blocks', 'Cotton Strap'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Sana V.',
                rating: 5,
                comment: 'The mat is very cushioned and has a good grip. Rented for my morning yoga routine.',
                date: '6 days ago',
                images: [
                    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '40',
        title: 'Instant Pot Pro',
        description: 'Multi-use pressure cooker with 28 presets for making delicious meals faster.',
        category: 'Appliances',
        price: 350,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 62,
        location: 'Chandigarh, Punjab',
        owner: 'Sukhwinder S.',
        ownerRating: 4.6,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1584281722572-870371077678?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502472545825-0ad56f890bb1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1574362848149-11446d3ee2b5?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['10-in-1 Function', 'Quick Release Button', 'Stainless Steel Pot'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Mandeep K.',
                rating: 5,
                comment: 'Made cooking dinner so much easier and faster. Rented for a busy week.',
                date: '4 days ago',
                images: [
                    'https://images.unsplash.com/photo-1584281722572-870371077678?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1502472545825-0ad56f890bb1?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chandigarh'
            }
        ]
    },
    {
        id: '41',
        title: 'GoPro Karma Drone',
        description: 'Compact and easy to fly drone. Capture amazing aerial footage with your GoPro.',
        category: 'Drones',
        price: 1500,
        priceUnit: 'day',
        rating: 4.5,
        reviewsCount: 28,
        location: 'Manali, H.P.',
        owner: 'Tshering D.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1527977966376-1c8418f9f108?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1504893524553-f8591ce2f0dd?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Foldable Design', 'Gimbal Included', 'Auto-return Home'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Tenzing R.',
                rating: 5,
                comment: 'Beautiful aerial shots of the mountains. Very easy to fly even for a beginner.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1527977966376-1c8418f9f108?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Manali'
            }
        ]
    },
    {
        id: '42',
        title: 'Sennheiser Momentum 3',
        description: 'Premium wireless headphones with intuitive design and exceptional sound performance.',
        category: 'Speakers',
        price: 350,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 52,
        location: 'Delhi, NCR',
        owner: 'Sandeep M.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Smart Pause', 'Active Noise Cancellation', 'Find with Tile'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Kabir L.',
                rating: 5,
                comment: 'Crystal clear sound quality. Very comfortable for long hours of listening.',
                date: '2 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            }
        ]
    },
    {
        id: '43',
        title: 'Breville Barista Pro',
        description: 'Professional espresso machine with intuitive interface. Specialty coffee at home.',
        category: 'Appliances',
        price: 900,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 45,
        location: 'Mumbai, Maharashtra',
        owner: 'Sanjay M.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['ThermoJet Heating', 'Integrated Grinder', 'Digital Display'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Kabir G.',
                rating: 5,
                comment: 'The quality of coffee is as good as any cafe. Rented for a month trial. I might just buy one now!',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '44',
        title: 'Le Creuset Dutch Oven',
        description: 'Iconic cast iron dutch oven. Perfect for slow cooking, braising, and baking.',
        category: 'Appliances',
        price: 250,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 32,
        location: 'Pune, Maharashtra',
        owner: 'Aditi V.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Enameled Cast Iron', 'Even Heat Dist.', 'Lifetime Durability'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Rohini S.',
                rating: 5,
                comment: 'Rented for a special Sunday dinner. It cooks so evenly and looks beautiful on the table!',
                date: '3 days ago',
                images: [
                    'https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Pune'
            }
        ]
    },
    {
        id: '45',
        title: 'Meta Quest 3 VR Headset',
        description: 'Next-gen mixed reality headset with incredible resolution and performance.',
        category: 'Gaming',
        price: 700,
        priceUnit: 'day',
        rating: 4.9,
        reviewsCount: 88,
        location: 'Bangalore, Karnataka',
        owner: 'Praveen R.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1592477344793-97d473456365?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Mixed Reality', '4K+ Infinite Disp.', 'Touch Plus Controllers'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Anup K.',
                rating: 5,
                comment: 'Absolutely mind-blowing experience. The passthrough is amazing. Rented for a weekend party.',
                date: '2 days ago',
                images: [
                    'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1592477344793-97d473456365?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    },
    {
        id: '46',
        title: 'Yeti Tundra 45 Cooler',
        description: 'Legendary toughness and ice retention. The ultimate cooler for any adventure.',
        category: 'Camping',
        price: 300,
        priceUnit: 'day',
        rating: 4.7,
        reviewsCount: 24,
        location: 'Chandigarh, Punjab',
        owner: 'Harpreet S.',
        ownerRating: 4.9,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Rotomolded Const.', 'PermaFrost Insul.', 'FatWall Design'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Jaspreet B.',
                rating: 5,
                comment: 'Kept our drinks ice cold for three whole days in the heat. Very sturdy!',
                date: '5 days ago',
                images: [
                    'https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Chandigarh'
            }
        ]
    },
    {
        id: '47',
        title: 'Bang & Olufsen Beosound A1',
        description: 'Waterproof Bluetooth speaker with built-in voice assistant and great sound.',
        category: 'Speakers',
        price: 350,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 52,
        location: 'Hyderabad, Telangana',
        owner: 'Vikram T.',
        ownerRating: 4.8,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1608155611287-28af0746cc8b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['360 Sound', 'IP67 Waterproof', '18hr Battery'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Shreya P.',
                rating: 5,
                comment: 'The sound clarity is unbelievable for its size. Perfect for a poolside party!',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1608155611287-28af0746cc8b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Hyderabad'
            }
        ]
    },
    {
        id: '48',
        title: 'Apple Watch Ultra 2',
        description: 'The most rugged and capable Apple Watch. Designed for endurance, exploration, and adventure.',
        category: 'Wearables',
        price: 800,
        priceUnit: 'day',
        rating: 5.0,
        reviewsCount: 12,
        location: 'Delhi, NCR',
        owner: 'Amit K.',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1508685096489-77a4680abe92?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1617042375876-a13e3cee739a?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Titanium Case', 'Action Button', '36hr Battery'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Varun T.',
                rating: 5,
                comment: 'The display is super bright and the battery effortlessly lasts multiple days. Perfect for a hiking trip.',
                date: '4 days ago',
                images: [
                    'https://images.unsplash.com/photo-1508685096489-77a4680abe92?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1434493907317-a46b53b8183e?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1617042375876-a13e3cee739a?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Delhi'
            }
        ]
    },
    {
        id: '49',
        title: 'Vitamix A3500 Blender',
        description: 'Highly versatile blender with 5 program settings for smoothies, soups, and more.',
        category: 'Appliances',
        price: 450,
        priceUnit: 'day',
        rating: 4.8,
        reviewsCount: 38,
        location: 'Mumbai, Maharashtra',
        owner: 'Lata D.',
        ownerRating: 4.7,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1585238341267-1cfcb2191054?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['Variable Speed', 'Pulse Feature', 'Self-cleaning Mode'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Nisha V.',
                rating: 5,
                comment: 'This blender is a beast. Easily crushed ice and frozen fruit into a smooth consistency.',
                date: '1 week ago',
                images: [
                    'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1585238341267-1cfcb2191054?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Mumbai'
            }
        ]
    },
    {
        id: '50',
        title: 'Canon EOS R5 Camera',
        description: 'Next-level full-frame mirrorless camera for photographers and filmmakers.',
        category: 'Cameras',
        price: 3500,
        priceUnit: 'day',
        rating: 5.0,
        reviewsCount: 22,
        location: 'Bangalore, Karnataka',
        owner: 'Deepak J.',
        ownerRating: 5.0,
        availability: 'Available',
        images: [
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1520390138845-fd2d22962470?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=1200'
        ],
        features: ['45MP CMOS', '8K Video', 'IBIS'],
        isActive: true,
        reviews: [
            {
                id: 1,
                user: 'Ajay S.',
                rating: 5,
                comment: 'The autofocus is incredibly fast and accurate. Perfect for wildlife photography session.',
                date: '2 weeks ago',
                images: [
                    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1520390138845-fd2d22962470?auto=format&fit=crop&q=80&w=400',
                    'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&q=80&w=400'
                ],
                location: 'Bangalore'
            }
        ]
    }
];
