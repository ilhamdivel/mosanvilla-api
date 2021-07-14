var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb+srv://dbvilla:divel213@mosanvilla.bqyiv.mongodb.net/db_villa?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Users",
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Vila dengan halaman belakang yang indah",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Vila dengan ruang tamu yang besar",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901113"),
        name: "Vila dengan Kitchen set",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // Night Town
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Victoria Caffe",
        price: 25,
        sumBooking: 1,
        country: "Sumatra Barat",
        city: "Bukittinggi",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Cubadak Paradiso",
        price: 40,
        sumBooking: 2,
        country: "Sumatra Barat",
        city: "Pesisir Selatan",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Atria
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Serasah Boenta",
        price: 50,
        sumBooking: 3,
        country: "Sumatra Barat",
        city: "Harau",
        isPopular: false,
        description:
          "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Matos
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Kolivera",
        price: 20,
        sumBooking: 4,
        country: "Sumatra Barat",
        city: "Payakumbuh",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Bamboosa",
        price: 55,
        sumBooking: 5,
        country: "Sumatra Barat",
        city: "Bukittinggi",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Castle
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
        title: "Lubuk Mintirun",
        price: 30,
        sumBooking: 6,
        country: "Sumatra Barat",
        city: "Padang",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
        title: "Kayu Putih",
        price: 25,
        sumBooking: 7,
        country: "Sumatra Barat",
        city: "Solok",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
        title: "Air Manis",
        price: 40,
        sumBooking: 8,
        country: "Sumatra Barat",
        city: "Padang",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Vrince
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902230"),
        title: "Maninjau Resort",
        price: 60,
        sumBooking: 9,
        country: "Sumatra Barat",
        city: "Agam",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Ibis
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902231"),
        title: "Bagoes",
        price: 35,
        sumBooking: 11,
        country: "Sumatra Barat",
        city: "Lubuk Basung",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902232"),
        title: "Aie Angek",
        price: 65,
        sumBooking: 13,
        country: "Sumatra Barat",
        city: "Bukittinggi",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33") },
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902233"),
        title: "Bilou Beach",
        price: 40,
        sumBooking: 14,
        country: "Sumatra Barat",
        city: "K.Mentawai",
        isPopular: false,
        description:
        "Villa-villa banyak yang menyediakan fasilitas hiburan seperti taman bermain anak-anak, danau pemancingan, taman-taman yang indah, fasilitas olahraga dan sarana rekreasi, serta memiliki peralatan dalam villa yang lengkap layak nya rumah anda.Pembangunan villa banyak berkembang di daerah puncak dan kawasan pegunungan lainnya dikarenakan iklim nya yang sejuk dan berhawa segar namun dekat oleh perjalanan mobil dari ibu kota. Di daerah puncak terkenal dengan hawanya yang sejuk, iklim matahari nya yang hangat, jauh dari kebisingan serta ketenangan alamnya yang indah.",
        unit: "malam",
        imageId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35") },
          // done
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07") },
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08") },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04") },
        ],
        categoryId: "5e96cbe292b97300fc901113",
      },
    ],
  },
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
        imageUrl: "images/image-mostpicked-1-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/image-mostpicked-2-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/image-mostpicked-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/image-mostpicked-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/item-1.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/image-mostpicked-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/image-mostpicked-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
        imageUrl: "images/image-mostpicked-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
        imageUrl: "images/image-mostpicked-9-min.jpg",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/image-mostpicked-10-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/image-mostpicked-11-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/image-mostpicked-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/image-mostpicked-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/image-mostpicked-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/image-mostpicked-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/image-category-1-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
        imageUrl: "images/image-category-2-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
        imageUrl: "images/image-category-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
        imageUrl: "images/image-category-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
        imageUrl: "images/image-category-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
        imageUrl: "images/image-category-6-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
        imageUrl: "images/image-category-10-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
        imageUrl: "images/image-category-11-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
        imageUrl: "images/image-category-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
        imageUrl: "images/image-category-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
        imageUrl: "images/image-category-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
        imageUrl: "images/image-category-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
        imageUrl: "images/image-category-16-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
        imageUrl: "images/image-category-17-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
        imageUrl: "images/image-category-18-min.jpg",
      },
    ],
  },
  // end image
  // start feature
  {
    model: "Feature",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "living room",
        qty: 23,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "televison",
        qty: 12,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "televison",
        qty: 5,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05"),
        name: "mbp/s",
        qty: 5,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06"),
        name: "unit ready",
        qty: 5,
        imageUrl: "images/feature-6.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07"),
        name: "refigrator",
        qty: 5,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08"),
        name: "televion",
        qty: 5,
        imageUrl: "images/feature-8.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "living room",
        qty: 23,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "televison",
        qty: 12,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "televison",
        qty: 5,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13"),
        name: "mbp/s",
        qty: 5,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14"),
        name: "unit ready",
        qty: 5,
        imageUrl: "images/feature-6.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15"),
        name: "refigrator",
        qty: 5,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16"),
        name: "televion",
        qty: 5,
        imageUrl: "images/feature-8.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: "Activity",
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04"),
        name: "Beach",
        type: "Snorkeling",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08"),
        name: "Snorkeling",
        type: "beach",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingStartDate: "12-12-2020",
        bookingEndDate: "12-12-2020",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Village Dorime",
          price: 20,
          duration: 2,
        },
        total: 40,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/bukti.jpeg",
          bankFrom: "BCA",
          status: "Proses",
          accountHolder: "ilham",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Ilham",
        lastName: "Hidayat",
        email: "ilham@gmail.com",
        phoneNumber: "082112098337",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "dorime",
        lastName: "fan",
        email: "forime@gmail.com",
        phoneNumber: "082377954008",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "BCA",
        nomorRekening: "089898",
        name: "ilham",
        imageUrl: "images/logo bca.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "Mandiri",
        nomorRekening: "878678",
        name: "hidayat",
        imageUrl: "images/logo mandiri.png",
      },
    ],
  },
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "ilham",
        password: "ilham",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
        username: "hidayat",
        password: "hidayat",
        role: "admin",
      },
    ],
  },
];
