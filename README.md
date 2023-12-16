This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## Jawaban Soal A

1. Apakah ada batasan atau preferensi desain tertentu yang harus diperhatikan dalam implementasi fitur ini?
2. Apa tolak ukur keberhasilan dari fitur ini?
3. Apakah ada keterkaitan khusus dengan fitur atau modul lain dalam produk yang sama?

## Jawaban Soal C1

1. Struktur Data:

- Gunakan struktur data graf untuk merepresentasikan koneksi antar pengguna dan komunitas.
- Simpan informasi hubungan dengan representasi graf, di mana simpul adalah pengguna atau komunitas, dan tepi adalah koneksi antara mereka.

2. Algoritma Pencarian Relevan:

- Mengimplementasi algoritma pencarian graf untuk menemukan pengguna atau komunitas yang memiliki koneksi dengan pengguna yang ditargetkan.
- Mempertimbangkan faktor seperti kesamaan minat, aktivitas, dan interaksi sebelumnya.
- Jika pengguna tidak memiliki koneksi atau tidak terkait dengan komunitas apa pun, gunakan strategi umum berdasarkan tren atau popularitas umum. Jika pengguna memiliki terlalu banyak koneksi, menggunakan sistem prioritas berdasarkan kedekatan dan frekuensi interaksi pengguna.

3. Dinamika Pembaruan Data:

- Susun mekanisme pembaruan data secara berkala untuk mencerminkan perubahan dinamis dalam koneksi pengguna dan komunitas.
- Hindari pembaruan menyeluruh dengan memanfaatkan teknik pembaruan sebagian (incremental update).

4. Pengoptimalan Kinerja:

- Lakukan pengoptimalan kueri untuk mengurangi beban server dan memastikan respon cepat pada skala besar.
- Gunakan teknik caching untuk mengurangi waktu latensi.

5. Pengujian:

- Melakukan unit testing dan integrasi secara menyeluruh untuk memastikan kestabilan fitur.
- Gunakan uji kinerja untuk mengevaluasi respons dan skalabilitas fitur dalam skenario beban tinggi.

## Jawaban Soal C2

1. Inisialisasi Graf Koneksi:

- Bangun graf yang merepresentasikan koneksi antar pengguna dan komunitas.
- Setiap pengguna atau komunitas menjadi simpul dalam graf, dan tepi mewakili koneksi.

2. Kalkulasi Koneksi:

- Hitung kedekatan antara pengguna target dan simpul lain dalam graf.
- Pertimbangkan faktor seperti aktivitas bersama, kesamaan minat, dan sejarah interaksi.
- Beri bobot pada koneksi berdasarkan tingkat kedekatan.
- Prioritaskan koneksi dengan kedekatan yang lebih tinggi untuk mendapatkan rekomendasi yang lebih relevan.

3. Identifikasi komunitas dan trending:

- Jika tidak ada koneksi yang memenuhi persyaratan, berikan rekomendasi umum berdasarkan tren populer atau aktivitas umum pengguna.
- Temukan komunitas di sekitar pengguna target berdasarkan struktur graf.
- Ambil simpul yang terkait dengan pengguna dan hitung tingkat keterlibatan dalam komunitas tersebut.
- Gabungkan rekomendasi dari koneksi individu dan komunitas.
- Prioritaskan orang yang memiliki kedekatan tinggi dan aktif di komunitas yang relevan.

4. Pertimbangkan Aktivitas Terkini:

- Berikan bobot ekstra pada koneksi atau komunitas yang terlibat dalam aktivitas terkini pengguna.
- Pastikan bahwa rekomendasi mencerminkan keadaan terkini pengguna.

5. Evaluasi Periodik:

- Lakukan evaluasi periodik terhadap performa algoritma menggunakan metrik keberhasilan dan respons pengguna.
- Sesuaikan parameter atau strategi algoritma berdasarkan hasil evaluasi.
