var carousel_images = ["assets/HP_Rotating_Apple_MainBanner_26May2025_b9slnz.webp", "assets/HP_Rotating_CromaACs_30May2025_v2dclq.webp", "assets/HP_Rotating_Fans_30May2025_gdprkg.webp", "assets/HP_Rotating_HD_30May2025_w7hgxr.webp", "assets/HP_Rotating_NothingPhone2aPlus_30May2025_v4a09z.webp", "assets/HP_Rotating_Ref_30May2025_lixpah.webp", "assets/HP_Rotating_SonySB_30May2025_ayevaq.webp", "assets/HP_Rotating_SW_30May2025_gy0zed.webp"]

var current = 0
function show_image() {
    document.getElementById("myimage").src = carousel_images[current]
}
show_image()

function next_image() {
    current = (current + 1) % carousel_images.length
    show_image()
}
function prev_image() {
    current = (current - 1 + carousel_images.length) % carousel_images.length
    show_image()
}