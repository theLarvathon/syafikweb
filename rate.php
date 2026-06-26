<?php 
if(session_status()===PHP_SESSION_NONE){
    session_start();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Form Rating</title>
    <style>
     
        .rating input {
            display: none;
        }
        .rating label {
            font-size: 30px;
            color: #ddd;
            cursor: pointer;
        }
        .rating input:checked ~ label {
            color: #ffc107;
        }
        .rating label:hover,
        .rating label:hover ~ label {
            color: #ffc107;
        }
        .form-group {
            margin: 15px 0;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button, .button{
            background: #007bff;
            color: white;
            padding: 10px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
        .error {
            color: red;
            padding: 10px;
            background: #f8d7da;
            border-radius: 5px;
        }
    </style>
    
    <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Jacquard+12&family=Quicksand:wght@300..700&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sixtyfour&family=Smokum&family=Tilt+Warp&display=swap"
    rel="stylesheet">
     <!-- tailwind -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
   <!-- Include jQuery from CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="container max-w-120 border-1 border-solid border-gray-400 rounded-lg p-5 my-12 mx-auto">
       
            <h2 class="flex justify-center items-center font-primary  mb-6">Form Rating</h2>

       
        <div class="hidden" id="customAlert">

            <?php if(!empty($_SESSION['succes'])):?>
            <div class=" bg-green-500 text-green-700 p-4 rounded-md">Rating berhasil dikirim! Thank youu❤</div>
            <?php endif; ?>
            
            <?php if(isset($_SESSION['error'])): ?>
                <div class="error bg-red-500 text-red-700 p-4 rounded-md"><?php echo htmlspecialchars($_SESSION['error']); ?></div>
                <?php endif; ?>
        </div>
                
        <form action="proses.php" method="POST">
            <div class="form-group">
                <label>Nama: <span class="font-quicksand italic text-gray-500">Nama wajib di isi !!</span></label>
                <input placeholder="nama" type="text" name="nama" required>
            </div>
            
            <div class="form-group">
                <label > Rating: <span class="font-quicksand italic text-gray-500">Rating wajib di isi !!</span></label>
                <div class="rating flex flex-row-reverse gap-2">
                    <input type="radio" name="rating" id="star5" value="5" required>
                    <label for="star5">★</label>
                    
                    <input type="radio" name="rating" id="star4" value="4">
                    <label for="star4">★</label>
                    
                    <input type="radio" name="rating" id="star3" value="3">
                    <label for="star3">★</label>
                    
                    <input type="radio" name="rating" id="star2" value="2">
                    <label for="star2">★</label>
                    
                    <input type="radio" name="rating" id="star1" value="1">
                    <label for="star1">★</label>
                </div>
            </div>
            
            <div class="form-group">
                <label>Komentar (opsional):</label>
                <textarea placeholder="komentar" name="komentar" rows="4"></textarea>
            </div>
            <div>
                <a href="index.php"><span class="button"> Kembali</span></a>
                <button type="submit">Kirim Rating</button>
            </div>
        </form>
    </div>
    <script>
         <?php if (isset($_SESSION['succes'])|| isset($_SESSION['error'])): ?>
           $(document).ready(function(){

            $('#customAlert')
            .hide()
            .fadeIn(1000)
            .delay(3000)
            .fadeOut(1000)
           });
        <?php endif; ?>
    </script>
    <?php unset(
        $_SESSION['succes'],
        $_SESSION['error']
    )
    ?>
</body>
</html>