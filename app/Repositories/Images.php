<?php

namespace App\Repositories;

use Illuminate\Http\UploadedFile;
use App\Image;

/**
 * @package App\Repositories
 */
class Images
{
    const IMAGES_STORAGE_FOLDER = 'images';

    /**
     * Stores the image in the file system and returns the image created.
     *
     * @param UploadedFile $file
     * @param int $pokemonId
     * @return Image
     */
    public static function store(UploadedFile $image, int $pokemonId): Image
    {
        $imagePath = $image->store(static::IMAGES_STORAGE_FOLDER);
        return Image::create(['path' => $imagePath, 'pokemon_id' => $pokemonId]);
    }
}
