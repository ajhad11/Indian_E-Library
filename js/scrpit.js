// Book data
const books = [
    {
        title: "The God of Small Things",
        author: "By Arundhati Roy",
        currentPrice: "₹374",
        originalPrice: "₹499",
        discount: "25% OFF",
        description: "The God of Small Things is a story about the childhood experiences of fraternal twins whose lives are destroyed by the 'Love Laws' that lay down 'who should be loved, and how much.' The book explores how small things affect people's behavior and their lives. It won the Booker Prize in 1997.",
        category: "Fiction",
        featured: true
    },
    {
        title: "A Suitable Boy",
        author: "By Vikram Seth",
        currentPrice: "₹679",
        originalPrice: "₹799",
        discount: "15% OFF",
        description: "A Suitable Boy is a novel set in post-independence India. It follows the story of four families over a period of a year and centers on Mrs. Rupa Mehra's efforts to arrange the marriage of her younger daughter, Lata, to a 'suitable boy.'",
        category: "Fiction",
        featured: true
    },
    {
        title: "The White Tiger",
        author: "By Aravind Adiga",
        currentPrice: "₹279",
        originalPrice: "₹399",
        discount: "30% OFF",
        description: "The White Tiger is the story of Balram Halwai, a village boy who becomes a successful entrepreneur in Bangalore. The novel offers a darkly humorous perspective of India's class struggle in a globalized world.",
        category: "Fiction",
        featured: true
    },
    {
        title: "Midnight's Children",
        author: "By Salman Rushdie",
        currentPrice: "₹449",
        originalPrice: "₹449",
        discount: null,
        description: "Midnight's Children is a 1981 novel by author Salman Rushdie. It portrays India's transition from British colonial rule to independence and the partition of India. It is considered an example of postcolonial, magical realism, and historical fiction.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Palace of Illusions",
        author: "By Chitra Banerjee",
        currentPrice: "₹319",
        originalPrice: "₹399",
        discount: "20% OFF",
        description: "The Palace of Illusions is a retelling of the Hindu epic Mahabharata from Draupadi's perspective. It provides a woman's take on the timeless tale that is traditionally dominated by male characters.",
        category: "Fiction",
        featured: true
    },
    {
        title: "Train to Pakistan",
        author: "By Khushwant Singh",
        currentPrice: "₹299",
        originalPrice: "₹299",
        discount: null,
        description: "Train to Pakistan is a historical novel about the Partition of India in 1947. The story is set in a fictional village on the border of India and Pakistan and explores the human tragedy that unfolded during this period.",
        category: "History",
        featured: false
    },
    {
        title: "The Guide",
        author: "By R.K. Narayan",
        currentPrice: "₹269",
        originalPrice: "₹299",
        discount: "10% OFF",
        description: "The Guide is a 1958 novel written in English by the Indian author R. K. Narayan. It tells the story of a tour guide who transitions from being a simple guide to a spiritual guide and eventually a revered holy man in a small Indian village.",
        category: "Fiction",
        featured: false
    },
    {
        title: "Interpreter of Maladies",
        author: "By Jhumpa Lahiri",
        currentPrice: "₹324",
        originalPrice: "₹499",
        discount: "35% OFF",
        description: "Interpreter of Maladies is a collection of nine short stories by Indian American author Jhumpa Lahiri. The stories explore themes of love, identity, and the immigrant experience, primarily focusing on Indian characters in India and the United States.",
        category: "Fiction",
        featured: true
    },
    {
        title: "The Namesake",
        author: "By Jhumpa Lahiri",
        currentPrice: "₹349",
        originalPrice: "₹425",
        discount: "18% OFF",
        description: "The Namesake is the first novel by author Jhumpa Lahiri. It explores the themes of cultural identity, the immigrant experience, and the relationship between parents and children, focusing on a Bengali family living in the United States.",
        category: "Fiction",
        featured: true
    },
    {
        title: "The Inheritance of Loss",
        author: "By Kiran Desai",
        currentPrice: "₹389",
        originalPrice: "₹499",
        discount: "22% OFF",
        description: "The Inheritance of Loss is the second novel by Indian author Kiran Desai. It won the 2006 Man Booker Prize and the National Book Critics Circle Fiction Award. The book explores themes of globalization, multiculturalism, and inequality.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Great Indian Novel",
        author: "By Shashi Tharoor",
        currentPrice: "₹449",
        originalPrice: "₹449",
        discount: null,
        description: "The Great Indian Novel is a satirical novel that recasts the Indian epic Mahabharata in the context of the Indian Independence Movement and the first three decades of post-independence India.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Room on the Roof",
        author: "By Ruskin Bond",
        currentPrice: "₹219",
        originalPrice: "₹249",
        discount: "12% OFF",
        description: "The Room on the Roof is a novel written by Ruskin Bond. It was his first literary venture and won the John Llewellyn Rhys Prize in 1957. The story follows the life of an orphaned Anglo-Indian boy in Dehradun.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Shadow Lines",
        author: "By Amitav Ghosh",
        currentPrice: "₹364",
        originalPrice: "₹499",
        discount: "27% OFF",
        description: "The Shadow Lines is a novel by Indian writer Amitav Ghosh. It is a book that captures perspective of time and events, of lines that bring people together and hold them apart, lines that are clearly visible from one perspective and nonexistent from another.",
        category: "Fiction",
        featured: true
    },
    {
        title: "English, August",
        author: "By Upamanyu Chatterjee",
        currentPrice: "₹399",
        originalPrice: "₹399",
        discount: null,
        description: "English, August is a novel by Upamanyu Chatterjee. It is a story of a young Indian civil servant who is posted to a small town and his experiences with the cultural and social realities of rural India.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Blue Umbrella",
        author: "By Ruskin Bond",
        currentPrice: "₹169",
        originalPrice: "₹199",
        discount: "15% OFF",
        description: "The Blue Umbrella is a short novel by Ruskin Bond. It tells the story of a young girl named Binya who trades her leopard's claw pendant for a beautiful blue umbrella, which becomes the envy of everyone in her village.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Serpent's Revenge",
        author: "By Sudha Murty",
        currentPrice: "₹199",
        originalPrice: "₹249",
        discount: "20% OFF",
        description: "The Serpent's Revenge is a collection of unusual stories from Indian mythology by Sudha Murty. The book features fascinating tales from ancient texts that are not commonly known but are equally interesting and meaningful.",
        category: "Mythology",
        featured: false
    },
    {
        title: "The Discovery of India",
        author: "By Jawaharlal Nehru",
        currentPrice: "₹549",
        originalPrice: "₹549",
        discount: null,
        description: "The Discovery of India was written by India's first Prime Minister Jawaharlal Nehru during his imprisonment in 1942–1945. The book provides a broad view of Indian history, philosophy, and culture from the perspective of an Indian fighting for independence.",
        category: "History",
        featured: true
    },
    {
        title: "The Immortals of Meluha",
        author: "By Amish Tripathi",
        currentPrice: "₹224",
        originalPrice: "₹299",
        discount: "25% OFF",
        description: "The Immortals of Meluha is the first novel of the Shiva Trilogy by Amish Tripathi. The story is set in 1900 BC in what the inhabitants of the period call the land of Meluha and narrates the journey of Shiva, a Tibetan immigrant.",
        category: "Fiction",
        featured: true
    },
    {
        title: "The Village by the Sea",
        author: "By Anita Desai",
        currentPrice: "₹269",
        originalPrice: "₹299",
        discount: "10% OFF",
        description: "The Village by the Sea is a novel by Anita Desai. It is set in a small fishing village near Bombay and tells the story of a family struggling against poverty and the changes brought by industrialization.",
        category: "Fiction",
        featured: false
    },
    {
        title: "My Experiments with Truth",
        author: "By Mahatma Gandhi",
        currentPrice: "₹299",
        originalPrice: "₹299",
        discount: null,
        description: "The Story of My Experiments with Truth is the autobiography of Mohandas K. Gandhi, covering his life from early childhood through to 1921. It was written in weekly installments and published in his journal Navjivan from 1925 to 1929.",
        category: "Biography",
        featured: true
    },
    {
        title: "The Secret of the Nagas",
        author: "By Amish Tripathi",
        currentPrice: "₹279",
        originalPrice: "₹399",
        discount: "30% OFF",
        description: "The Secret of the Nagas is the second book of the Shiva Trilogy by Amish Tripathi. The story continues the journey of Shiva as he tries to uncover the mystery behind the Nagas and their connection to the evil that threatens Meluha.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Oath of the Vayuputras",
        author: "By Amish Tripathi",
        currentPrice: "₹329",
        originalPrice: "₹399",
        discount: "17% OFF",
        description: "The Oath of the Vayuputras is the third and final book of the Shiva Trilogy by Amish Tripathi. It concludes the epic journey of Shiva as he battles the ultimate evil and fulfills his destiny as the Neelkanth.",
        category: "Fiction",
        featured: false
    },
    {
        title: "The Argumentative Indian",
        author: "By Amartya Sen",
        currentPrice: "₹499",
        originalPrice: "₹499",
        discount: null,
        description: "The Argumentative Indian is a book written by Nobel Prize-winning Indian economist Amartya Sen. It is a collection of essays that discuss India's history and identity, focusing on the tradition of public debate and intellectual pluralism.",
        category: "Non-Fiction",
        featured: false
    },
    {
        title: "The Difficulty of Being Good",
        author: "By Gurcharan Das",
        currentPrice: "₹399",
        originalPrice: "₹499",
        discount: "20% OFF",
        description: "The Difficulty of Being Good is a book by Gurcharan Das that uses the ancient Indian epic Mahabharata to explore the concept of dharma (duty/righteousness) and its relevance to contemporary life and governance.",
        category: "Philosophy",
        featured: false
    },
    {
        title: "The Last Lecture",
        author: "By Randy Pausch",
        currentPrice: "₹339",
        originalPrice: "₹399",
        discount: "15% OFF",
        description: "The Last Lecture is a book by Carnegie Mellon University professor Randy Pausch, based on his 'last lecture' titled 'Really Achieving Your Childhood Dreams.' It's a reflection on his life and lessons learned while battling pancreatic cancer.",
        category: "Non-Fiction",
        featured: false
    },
    {
        title: "Wings of Fire",
        author: "By A.P.J. Abdul Kalam",
        currentPrice: "₹299",
        originalPrice: "₹299",
        discount: null,
        description: "Wings of Fire is an autobiography of A.P.J. Abdul Kalam, the former President of India. It covers his early life, his work in the Indian space research and missile programs, and his philosophy of life.",
        category: "Biography",
        featured: true
    },
    {
        title: "The 3 Mistakes of My Life",
        author: "By Chetan Bhagat",
        currentPrice: "₹155",
        originalPrice: "₹199",
        discount: "22% OFF",
        description: "The 3 Mistakes of My Life is a novel by Chetan Bhagat. The story is about three young men who try to make the most of opportunities in a rapidly changing India, and the three mistakes that threaten to ruin their lives.",
        category: "Fiction",
        featured: false
    },
    {
        title: "Five Point Someone",
        author: "By Chetan Bhagat",
        currentPrice: "₹163",
        originalPrice: "₹199",
        discount: "18% OFF",
        description: "Five Point Someone is the debut novel by Chetan Bhagat. The story is about three friends at IIT Delhi who struggle with the pressures of the academic system and try to cope with their 'five point someone' (low) GPAs.",
        category: "Fiction",
        featured: false
    },
    {
        title: "Two States",
        author: "By Chetan Bhagat",
        currentPrice: "₹199",
        originalPrice: "₹199",
        discount: null,
        description: "Two States: The Story of My Marriage is a novel by Chetan Bhagat. It is a story about a couple from two different states in India who fall in love and then must convince their parents to approve of their marriage.",
        category: "Fiction",
        featured: false
    },
    {
        title: "Half Girlfriend",
        author: "By Chetan Bhagat",
        currentPrice: "₹149",
        originalPrice: "₹199",
        discount: "25% OFF",
        description: "Half Girlfriend is a novel by Chetan Bhagat. The story is about a Bihari boy who falls in love with a rich girl from Delhi and their complicated relationship that evolves from friendship to a 'half girlfriend' situation.",
        category: "Fiction",
        featured: false
    }
];

// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function () {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-link');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const pageSections = document.querySelectorAll('.page-section');

    // Set active navigation link
    function setActiveNavLink(targetId) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Show specific page section
    function showPageSection(sectionId) {
        pageSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Navigation link click event
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            setActiveNavLink(targetId);
            showPageSection(targetId.substring(1)); // Remove # from ID

            // Close mobile menu if open
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    // Footer link click event
    footerLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            setActiveNavLink(targetId);
            showPageSection(targetId.substring(1)); // Remove # from ID
        });
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Pagination variables
    const booksPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(books.length / booksPerPage);

    // DOM elements
    const booksGrids = document.querySelectorAll('.books-grid');
    const pageButtons = document.querySelectorAll('.page-btn');
    const nextButtons = document.querySelectorAll('.next-btn');

    // Initialize the page
    renderBooks();
    updatePagination();
    loadFeaturedBooks();

    // Render books based on current page
    function renderBooks() {
        booksGrids[0].innerHTML = '';

        const startIndex = (currentPage - 1) * booksPerPage;
        const endIndex = Math.min(startIndex + booksPerPage, books.length);

        for (let i = startIndex; i < endIndex; i++) {
            const book = books[i];
            createBookCard(book, booksGrids[0]);
        }

        // Reinitialize favorite buttons
        initializeFavorites();
    }

    // Load featured books
    function loadFeaturedBooks() {
        const featuredGrid = document.querySelector('#featured .books-grid');
        if (featuredGrid) {
            featuredGrid.innerHTML = '';

            const featuredBooks = books.filter(book => book.featured);

            featuredBooks.forEach(book => {
                createBookCard(book, featuredGrid);
            });

            // Reinitialize favorite buttons
            initializeFavorites();
        }
    }

    // Create book card element
    function createBookCard(book, container) {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-image">
                <i class="fas fa-book"></i>
                ${book.discount ? `<div class="discount-badge">${book.discount}</div>` : ''}
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-price">
                    <div>
                        <span class="current-price">${book.currentPrice}</span>
                        <span class="original-price">${book.originalPrice}</span>
                    </div>
                    <button class="add-to-favorites"><i class="far fa-heart"></i></button>
                </div>
            </div>
        `;
        container.appendChild(bookCard);

        // Add click event to show modal
        bookCard.addEventListener('click', function () {
            showBookModal(book);
        });
    }

    // Update pagination buttons
    function updatePagination() {
        // Update page buttons
        pageButtons.forEach(button => {
            const pageNum = parseInt(button.getAttribute('data-page'));
            button.classList.toggle('active', pageNum === currentPage);

            // Hide page buttons that exceed total pages
            if (pageNum > totalPages) {
                button.style.display = 'none';
            } else {
                button.style.display = 'inline-block';
            }
        });

        // Update next buttons
        nextButtons.forEach(button => {
            button.disabled = currentPage === totalPages;
            button.style.opacity = currentPage === totalPages ? '0.5' : '1';
            button.style.cursor = currentPage === totalPages ? 'not-allowed' : 'pointer';
        });
    }

    // Page button event listeners
    pageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const pageNum = parseInt(this.getAttribute('data-page'));
            if (pageNum <= totalPages) {
                currentPage = pageNum;
                renderBooks();
                updatePagination();
            }
        });
    });

    // Next button event listener
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (currentPage < totalPages) {
                currentPage++;
                renderBooks();
                updatePagination();
            }
        });
    });

    // Show book modal
    function showBookModal(book) {
        const modal = document.getElementById('book-modal');
        const modalTitle = document.querySelector('.modal-book-title');
        const modalAuthor = document.querySelector('.modal-book-author');
        const modalDescription = document.querySelector('.modal-book-description');
        const modalCurrentPrice = document.querySelector('.modal-current-price');
        const modalOriginalPrice = document.querySelector('.modal-original-price');
        const modalDiscountBadge = document.querySelector('.modal-discount-badge');

        modalTitle.textContent = book.title;
        modalAuthor.textContent = book.author;
        modalDescription.textContent = book.description;
        modalCurrentPrice.textContent = book.currentPrice;
        modalOriginalPrice.textContent = book.originalPrice;

        if (book.discount) {
            modalDiscountBadge.textContent = book.discount;
            modalDiscountBadge.style.display = 'inline-block';
        } else {
            modalDiscountBadge.style.display = 'none';
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    const closeModal = document.querySelector('.close-modal');
    const modal = document.getElementById('book-modal');

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Favorite buttons functionality
    function initializeFavorites() {
        const favoriteButtons = document.querySelectorAll('.add-to-favorites');

        favoriteButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                this.classList.toggle('active');
                this.innerHTML = this.classList.contains('active') ?
                    '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';

                // Save to localStorage
                const bookTitle = this.closest('.book-card').querySelector('.book-title').textContent;
                const isFavorite = this.classList.contains('active');

                updateFavorites(bookTitle, isFavorite);
            });
        });
    }

    // Update favorites in localStorage
    function updateFavorites(bookTitle, isFavorite) {
        // This would update localStorage
        console.log(`${bookTitle} ${isFavorite ? 'added to' : 'removed from'} favorites`);
    }

    // Category filter buttons
    const filterButtons = document.querySelectorAll('.category-filters button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Reset to first page when filtering
            currentPage = 1;
            renderBooks();
            updatePagination();

            // Here you would normally filter the books
            // For this example, we'll just log the category
            console.log('Filtering by: ' + this.textContent);
        });
    });

    // Search functionality
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function () {
        const searchTerm = document.querySelector('.search-bar input').value;
        if (searchTerm) {
            console.log('Searching for: ' + searchTerm);
            alert('Searching for: ' + searchTerm);
            // In a real implementation, you would filter books based on search term
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});