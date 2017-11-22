<?php
namespace App;

use Illuminate\Database\Eloquent \{
  Model, SoftDeletes
};

class Image extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];
}
