<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquuent\SoftDeletes;

/**
 * Class Image
 * @package App
 */
class Image extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
